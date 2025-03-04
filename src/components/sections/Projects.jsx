import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {

    return (
        <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20"
        >
            
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
                                    <strong>Deep Learning-Based Disease Classification:</strong> This project uses deep learning to classify potato leaf diseases—Early Blight, Late Blight, and Healthy—using a Kaggle dataset of 3,000 images.
                                    </li>
                                    <li>
                                    <strong>Enhancing Agricultural Productivity:</strong> This study enhances crop management by enabling early detection and precise identification of potato diseases, promoting global food security and sustainable agriculture.
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
                            This paper introduces a cost-effective IoT-based fire detection system that detects fire using a flame sensor, triggers an alarm, and activates a water pump via a relay switch. It also sends real-time notifications through Telegram, ensuring a quick response and efficient fire management. Performance analysis confirms its effectiveness, making it a viable solution for urban and industrial use.
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
                            Tea House is a modern and elegant tea shop website featuring a beautifully designed UI with smooth animations and responsive layouts. It showcases a variety of premium teas, highlights customer testimonials, and provides easy navigation for a seamless user experience.
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
                            Penguin Fashion is a sleek and responsive e-commerce website showcasing trendy clothing with a clean and modern design. It features stylish product displays, smooth navigation, and a user-friendly layout for an enhanced shopping experience. Perfect for fashion enthusiasts looking for a visually appealing online store.
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
                            Gamer Zone Design is a dynamic and visually engaging website tailored for gaming enthusiasts. It features a bold, modern layout with eye-catching graphics, intuitive navigation, and a futuristic design. Perfect for showcasing gaming products, news, or events in an immersive way.
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
                            Biker Zone is a sleek and modern website designed for motorcycle enthusiasts. It showcases stylish bike collections, key features, and pricing with a clean, user-friendly interface. The bold design and responsive layout ensure an engaging browsing experience.
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
                            Fruit Brust is a vibrant and engaging website featuring a fresh fruit marketplace. It offers a visually appealing design with bright colors, smooth navigation, and a responsive layout. The site enhances the user experience with an intuitive interface for browsing fruit selections.
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
                            Flower Shop is a beautifully designed website showcasing a variety of fresh flowers. It features an elegant layout, smooth navigation, and a responsive design. The site provides a delightful user experience for exploring and purchasing flowers effortlessly.
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
            

        </section>
    );
};