export default function Team({ project }: any) {
  const { team } = project;
  return (
    <section className="project-credits-container">
      <div className="project-credits">
        <h1 className="credits-headline">collaborators</h1>
        <div className="credits-grid">
          {team.map((member: any) => (
            <div key={member._id} className="credit">
              <small>{member.title}</small>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
