import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {

    return (
        <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        


                        {/* Project 1 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Potato Disease Classification of Leaves Using Deep Learning</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                                <ul className="list-disc list-inside">
                                    <li> 
                                    <strong>Deep Learning-Based Disease Classification:</strong> This project utilizes deep learning models to accurately classify potato leaf diseases into three categories—Potato Early Blight, Potato Late Blight, and Potato Healthy—using a curated dataset of 3,000 images from Kaggle.
                                    </li>
                                    <li>
                                    <strong>Enhancing Agricultural Productivity:</strong> By enabling early detection and precise identification of potato diseases, this study contributes to improved crop management,ultimately supporting global food security and sustainable agriculture.
                                    </li>
                                </ul>
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://github.com/Apurba1903/Potato-Disease-Classification-of-Leaves-using-Deep-Learning"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/plantVillage.jpg" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 1 End */}


                        {/* Project 2 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">IEEE Publication - An IoT-Based Integrated Solution for Fire Detection Alarm System and Water Supply Management (2023)</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                            This paper presents a cost-effective and user-friendly fire detection system utilizing IoT technology. The system detects fire using a flame sensor, triggers an alarm, and activates a water pump through a relay switch. Additionally, it sends real-time notifications to users via the Telegram app. Designed with simple sensors and motors, the system ensures quick response and efficient fire management. Performance analysis demonstrates its effectiveness compared to existing solutions, highlighting its potential for widespread adoption in urban and industrial settings.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Arduino", "ESP8266", "LDR", "Servo Motor", "5V Relay", "Alarm System"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://ieeexplore.ieee.org/document/10303496"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/iot.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 2 End */}


                        {/* Project 3 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Tea House</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["HTML", "CSS", "daisyUI", "Tailwind CSS"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://apurba1903.github.io/tea-house/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/tea.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 3 End */}


                        {/* Project 4 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Penguin Fashion</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["HTML", "CSS", "daisyUI", "Tailwind CSS"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://apurba1903.github.io/Penguin-Fashion/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/fashion.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 4 End */}


                        {/* Project 5 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Gamer Zone Design</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["HTML", "CSS", "daisyUI", "Tailwind CSS"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://apurba1903.github.io/Gamer-Zone-Design/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/website1.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 5 End */}


                        {/* Project 6 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Biker Zone</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["HTML", "CSS", "daisyUI", "Tailwind CSS"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://apurba1903.github.io/Biker-Zone/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/website2.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 6 End */}


                        {/* Project 7 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Fruit Brust Frontend</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["HTML", "CSS", "daisyUI", "Tailwind CSS"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://apurba1903.github.io/Fruit-Brust-Frontend/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/website3.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 7 End */}


                        {/* Project 8 Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Flower Shop</h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["HTML", "CSS"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px+8px_rgba(59,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            
                            {/* Project Image and Link*/}
                            <div className="flex justify-between items-center ">
                                <a 
                                href="https://apurba1903.github.io/Flower-Shop/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/website4.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Project 8 End */}


                        


                        


                    </div>
            </div>
            </RevealOnScroll>

        </section>
    );
};