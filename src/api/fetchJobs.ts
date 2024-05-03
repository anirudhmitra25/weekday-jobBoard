import axios from "axios";
export default async function fetchJobs({ limit = 10, offset = 0 }: any) {
  try {
    console.log("HEREE");
    const response = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        limit: limit,
        offset: offset,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data.jdList);
    return response.data.jdList;
  } catch (error: any) {
    throw new Error(error);
  } finally {
  }
}
