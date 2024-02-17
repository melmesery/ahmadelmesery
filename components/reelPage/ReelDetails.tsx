import { getReel } from "@/cms/sanity-utils.ts";

export const revalidate = 10;

export default async function ReelDetails() {
  const reel = await getReel();
  const { details } = reel;

  return (
    <div className="details-container" data-aos="fade-up">
      <h1>Included Projects</h1>
      {details.map((detail: any) => (
        <div key={detail._id} className="detail">
          <p className="detail-time">{detail.time}</p>
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  );
}
