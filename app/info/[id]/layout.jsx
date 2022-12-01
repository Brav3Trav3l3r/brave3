import Header from "./Header";

export default async function DashboardLayout({ children, params:{id} }) {

  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <div className="children" style={{display: "contents"}}>
        <Header id={id}/>
        {children}
      </div>
    </section>
  );
}