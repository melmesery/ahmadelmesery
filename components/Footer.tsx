import "../styles/Footer.css";

export const revalidate = 10;

export default async function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="mb-0 text-sm sm:text-base">Ahmad Elmesery &copy; {new Date().getFullYear()}</p>
        
      </div>
    </div>
  );
}
