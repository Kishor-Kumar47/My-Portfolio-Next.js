import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 iteme-center">
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl text-green-600">Technologies I Work with</h2>
          <p className="text-gray-200 pt-2">
            I have a solid foundation in web development, specializing in HTML,
            CSS, and JavaScript. My experience extends to using frameworks like
            React and Next.js to create dynamic and user-friendly applications.
            I'm also proficient in Tailwind CSS for efficient styling and
            design. with a passion for learning.
          </p>
        </div>
        <div>
            <div className="grid grid-cols-2 text-green-400 text-3xl sm:text-4xl bg-sky-900 p-5" data-aos="fade-right">
                <div className="space-y-2">
                    <h2>1. TypeScript</h2>
                    <h2>2. React.js</h2>
                    <h2>3. Next.js</h2>
                    <h2>3. Html5</h2>

                </div>
                <div className="space-y-2">
                    <h2>4. Tailwind CSS</h2>
                    <h2>5. CSS</h2>
                    <h2>6. Node.js</h2>
                    <h2>6. Bootstap</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
