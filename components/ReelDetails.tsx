import { getReel } from "../sanity/sanity-utils.ts";
import "../styles/Reel.css";

export const revalidate = 10;

export default async function ReelDetails() {
  const reel = await getReel();
  const { details } = reel;
  return (
    <div className="details animate__animated animate__slideInUp">
      <h1 className="details_headline">Included Projects</h1>
      {details.map((detail: any) => (
        <div key={detail._id} className="detail">
          <p className="detail_time">{detail.time}</p>
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  );
}
