import { RevealOnScroll } from "../RevealOnScroll";




export const About = () => {

    const programmingSkills = [
        "Python",
        "Go", 
        "JavaScript",
        "C"        
        
    ];

    const frameworkSkills = [
        "NumPy", 
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "TensorFlow",
        
    ];

    const frontendSkills = [
        "Flask",
        "HTML", 
        "CSS", 
        "React",
        "Tailwind CSS",
        "daisyUI",

    ];

    const backendSkills = [
        "Node.js", 
        
        
    ];

    return (
    <section 
    id="about" 
    className=" min-h-screen flex items-center justify-center py-20"
    >       
        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">

            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            >   About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

                <p className="text-gray-300 mb-6">
                    Passionate data science student with a strong foundation in artificial intelligence, machine learning, and big data analytics. My expertise lies in data-driven problem-solving, data visualization, and predictive modeling. 
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Programming Language </h3>
                        <div className="flex flex-wrap gap-2"> 
                            {programmingSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">  Frameworks / Libraries </h3>
                        <div className="flex flex-wrap gap-2"> 
                            {frameworkSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2"> 
                            {frontendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2"> 
                            {backendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">


                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all"
                >
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-5">

                        <li>
                            <strong>BSc in Computer Science and Engineering</strong> - Bangladesh University of Business and Technology (2020-2024)
                        </li>

                        <li>
                            <strong> <abbr style={{ textDecoration: "none" }} title="Post Graduate Diploma">PGD</abbr> in Data Science</strong> - IBER, United International University & <abbr style={{ textDecoration: "none" }} title="BASIS Institute of Technology & Management">BITM</abbr> (2025-Running)
                        </li>

                        <li>
                            <strong><abbr style={{ textDecoration: "none" }} title="International English Language Testing System">IELTS</abbr></strong> - Overall Band Score 7 (Valid Till: April, 2026 )
                        </li>

                        <li>
                            <strong>Relevant Coursework:</strong> 
                            <p><strong>Data Science Mentorship Program (DSMP) 2.0</strong> by CampusX - Running</p>
                        </li>
                    </ul>
                </div>


                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all"
                >
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>

                        
                        <div className="text-gray-300 space-y-5">
                            <p>
                                <h4 className="font-semibold"> 
                                    <strong>Health Care Expert</strong> at SeekMed Care (March, 2024 - December, 2024)</h4>
                                
                                <ol className="list-inside space-y-1" style={{ listStyleType: "lower-roman" }}>
                                    <li>Data Management and Excel Work</li>
                                    <li>Medical Documentation</li>
                                    <li>Assisted Patients with Hospital procedure</li>
                                    
                                </ol>
                                
                            </p>

                            <p>
                                <h4 className="font-semibold"><strong>Workshop</strong> on AI Career Management (February, 2025)</h4>
                                <p> 
                                    Learned about AI Career Management: Skills, Trends and Opportunities.   
                                </p>
                            </p>
                        </div>

                </div>


            </div>


        </div>
        </RevealOnScroll>
        
    </section>    
    );
};