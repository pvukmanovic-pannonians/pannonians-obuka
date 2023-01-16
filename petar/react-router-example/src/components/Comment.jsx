export default function Comment({ name, body, email }) {
  return (
    <div className="comments">
      <div className="name">{name}</div>
      <article>{body}</article>
      <div className="user">
        <div>
          <em>{email}</em>
        </div>
      </div>
    </div>
  );
}
