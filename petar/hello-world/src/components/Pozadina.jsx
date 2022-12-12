export const Pozadina = ({ children }) => {
  return (
    <>
      <div style={{ backgroundColor: "teal", padding: "12px 24px" }}>
        <h4>Odvojena komponenta koja ima children</h4>
        {children}
      </div>
    </>
  );
};

export function alertiranje() {
  alert("qweqwe");
}
