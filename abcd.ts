import { Objects, EquipmentImage } from "@foundry/ontology-api";
import { Function, Query, Integer } from "@foundry/functions-api";
import { Buffer } from "buffer";
import { encode } from "base64-arraybuffer";
import { GPT_4o } from "@foundry/models-api/language-models";
// Ensure you import the Objects helper from the correct module, for example:
// import { Objec8//ts } from "@foundry/objects-api";

const equipmentPrompt = "This is an image of exercise equipment, such as a dumbbell. Please describe the equipment in detail. If you see a weight on the equipment, include the weight in your description.";

export class MyFunctions {
@Function({ apiName: "describeEquipmentImage" })
// @Query({ apiName: "describeEquipmentImage" })
public async describeEquipmentImage(equipmentImageRid: string, text: string = equipmentPrompt, maxTokens: Integer = 100): Promise<string> {
  const equipmentImage = await Objects.search()
    .equipmentImage()
    .filter(e => e.imageId.exactMatch(equipmentImageRid))
    .all()[0];

  if (!equipmentImage) {
    throw new Error(`EquipmentImage with RID ${equipmentImageRid} not found`);
  }

  const data = await equipmentImage.image?.readAsync().then(b => b.arrayBuffer())!;
    // Encode the image data to a Base64 string.
    const b64data = encode(data);
    console.log(b64data);

    // Call the GPT_4o chat completion with the image and text prompt.
    const resp = await GPT_4o.createChatCompletion({
      params: {
        temperature: 0,
        maxTokens: maxTokens,
      },
      messages: [
        {
          role: "user",
          contents: [
            {
              image: {
                imageUrl: "data:image/png;base64," + b64data,
                detail: "high"
              }
            },
            { text }
          ]
        }
      ]
    });

    return resp.choices[0].message.content ?? "";
  }

  @Function()
  
}
