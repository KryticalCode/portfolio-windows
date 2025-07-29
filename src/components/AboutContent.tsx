export default function AboutContent() {
  return (
    <div className="w-full h-full overflow-x-hidden space-y-10.5 flex flex-col">
      <div className="flex flex-row items-center justify-center">
        <img
          src="/cartmanSP.jpeg"
          alt="Cartman"
          className="size-40 rounded-full"
        ></img>

        <p className="pl-10">
          <b>Matt</b>
          <br />
          Amatuer web-developer, pc enthusiast, video game enjoyer
          <br />
          Forklift operator / timber-yard worker at Bunnings Warehouse
        </p>
      </div>

      <div>
        <h2>WHY make this website?</h2> <br />
        <p>
          This site is a personal project that I wanted to create, to not only
          refine my skills, but to also have a place to showcase some of my work
          throughout university and beyond.
          <br />
          Credit where credit is due, this sites design is inspired by a
          youtuber "Sharlene Yap", who I stumbled across while practicing my
          CSS/JS skills. I really liked her design and style, and thought I
          would try to replicate it in my own way.
        </p>
      </div>
    </div>
  );
}
