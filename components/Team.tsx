export default function Team({ project }: any) {
  const { team } = project;
  return (
    <section className="credits_container">
      <div className="product_credits">
        <h1 className="credits_headline">Credits</h1>
        <div className="credits_grid">
          {team.map((member: any) => (
            <div key={member._id} className="credit">
              <small className="my-3">{member.title}</small>
              <p className="font-bold">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
