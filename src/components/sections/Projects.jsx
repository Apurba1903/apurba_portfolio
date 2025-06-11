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


                        {/* Potato Disease Classification Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Potato Disease Classification of Leaves Using Deep Learning - <em>Deep Learning Project</em></h3>

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
                                {["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib"].map((tech, key) => (
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
                                    src="images/plantVillage.png" 
                                    alt="Potato Leaves Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Potato Disease Classification End */}


                        {/* IEEE Publication Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">IEEE Publication - An IoT-Based Integrated Solution for Fire Detection Alarm System and Water Supply Management (2023) - <em>IOT Project</em></h3>

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
                        {/* IEEE Publication End */}
























                        {/* Insurance Prediction FastAPI Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Insurance Prediction API - <em>FastAPI Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                                A full-stack machine learning project that predicts customer insurance categories using structured data. The system includes a trained ML classification model served via a FastAPI REST API, a user-friendly Streamlit dashboard for real-time interaction, and complete Docker-based deployment for portability.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "Docker", "Pandas", "Pydantic", "FastAPI", "Streamlit"].map((tech, key) => (
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
                                href="https://github.com/Apurba1903/insurance_prediction_fastAPI_ml_updated"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/insuranceFastAPI.png" 
                                    alt="Insurance FastAPI"
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Insurance Prediction FastAPI End */}



                        {/* 99Acres Web Scraping Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">

                                99Acres  - <em>Web Scraping Project</em>

                            </h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 

                                A high-performance web scraper built with Python, Selenium, and Pandas to extract structured real estate data from 99acres.com. Captures key details such as property prices, locations, amenities, and seller contact info while implementing anti-bot bypass techniques for reliable data collection.

                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">

                                {["Python", "NumPy", "Pandas", "Selenium"]
                                
                                .map((tech, key) => (
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

                                href="https://github.com/Apurba1903/real_state_ws"

                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 

                                    src="images/99acres.png" 
                                    alt="99 Acre Website" 

                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* 99Acres Web Scraping End */}



                        {/* Flight Dashboard Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">

                                Flight Dashboard - <em>Data Analysis Project</em>

                            </h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 

                                An interactive data analytics dashboard built with Streamlit, powered by Amazon RDS (MySQL) and Python for real-time querying and visualization. The dashboard enables users to explore flight-related insights through dynamic filters, charts, and tables.

                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">

                                {["Python", "MySQL", "Amazon RDS", "Streamlit"] 
                                
                                .map((tech, key) => (
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

                                href="https://github.com/Apurba1903/flight_dashboard"

                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 

                                    src="images/flightDashboard.png" 
                                    alt="Flight Dashboard" 

                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Flight Dashboard End */}



                        {/* SmartPrix Phone Data Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">

                                Smartprix Phone Data - <em>Data Analysis and Web Scraping Project</em>

                            </h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 

                                A high-performance web scraper that extracts real-time product prices, specifications, and deals from Smartprix. Built with Python, Selenium, and BeautifulSoup, the tool monitors price fluctuations, analyzes market trends, and provides actionable insights for e-commerce and competitive analysis.

                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">

                                {["Python", "Selenium", "Pandas", "Beautiful Soup"] 
                                
                                .map((tech, key) => (
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

                                href="https://github.com/Apurba1903/smartprix_phone_data"

                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 

                                    src="images/smartprixPhone.png" 
                                    alt="Smartprix Phone Data" 

                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* SmartPrix Phone Data End */}



                        {/* BD Dashboard Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">BD Dashboard Website - <em>Data Analysis Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                                A focused Dash visualization analyzing Bangladesh’s socio-economic progress using Gapminder datasets. Features interactive charts (e.g., life expectancy vs. GDP, population growth) to explore trends over time.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "NumPy", "Pandas", "Plotly", "Dash", "HTML"].map((tech, key) => (
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
                                href="https://github.com/Apurba1903/bd-dashboard"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/bdDashboard.png" 
                                    alt="Gapminder Dataset Project" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* BD Dashboard End */}



                        {/* Yahoo Finance Stocks Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Yahoo Finance Stocks - <em>Web Scraping Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                                Python-based web scraper to collect and clean stock market data from Yahoo Finance, fetching historical prices, company fundamentals, and real-time metrics. The tool automates data extraction while handling missing values and formatting inconsistencies. The cleaned datasets (exported as xlsx) are analysis-ready, suitable for backtesting trading strategies, conducting fundamental analysis, or tracking market trends—demonstrating an end-to-end solution from raw web data to actionable financial insights.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "Time", "Pandas", "Numpy", "Selenium"].map((tech, key) => (
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
                                href="https://github.com/Apurba1903/stock_data_ws"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/yahooFinanceStock.png"
                                    alt="Yahoo Finance Stock Data Web Scraping Project" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Yahoo Finance Stocks End */}



                        {/* Census Visualization Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Census Visualization Website - <em>Data Analysis Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                                An interactive dashboard visualizing key Indian census metrics like literacy rates, internet access, and population demographics. Users can compare state-level data through dynamic charts and filters, powered by JavaScript and census datasets. Designed for researchers and policymakers to uncover regional trends.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "NumPy", "Pandas", "Plotly", "Streamlit"].map((tech, key) => (
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
                                href="https://apurba1903-census-visualization-app-uwjm7z.streamlit.app/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/census.png" 
                                    alt="Census Visualization Picture" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Census Visualization End */}



                        {/* Startup Dashboard Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Indian Startup Dashboard Website - <em>Data Analysis Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                            A data-driven platform analyzing India’s startup ecosystem, showcasing investments, funding trends, and investor-company relationships. Built with Python and Streamlit for real-time exploration.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "NumPy", "Pandas", "Plotly", "Matplotlib", "Streamlit"].map((tech, key) => (
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
                                href="https://6xyjoj2tnkghprwhevmbdf.streamlit.app/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/startupDashboard.png" 
                                    alt="Indian Startup Dashboard" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Startup Dashboard End */}



                        {/* Covid19 Dashboard Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Covid 19 Dashboard - <em>Data Analysis Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                                An interactive COVID-19 India dashboard using Covid19 Dataset tracking total/active/recovered cases and deaths. Features 3 core visualizations: daily state-wise trends, age distribution analysis, and case progression timelines - providing actionable insights into India's pandemic patterns.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "NumPy", "Pandas", "Plotly", "Matplotlib", "Dash"].map((tech, key) => (
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
                                href="https://github.com/Apurba1903/covid19"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/covid19.png" 
                                    alt="Covid 19 Dashboard" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* Covid19 Dashboard End */}



                        {/* EPL Top Scorer Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">EPL Top Scorer - <em>Web Scraping Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify"> 
                                Python web scraper using BeautifulSoup to automatically extract EPL top scorer stats (goals, assists, matches) from BBC Sport. Outputs clean, structured data in xlsx format for football analytics and performance tracking.
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "Requests", "BeautifulSoup"].map((tech, key) => (
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
                                href="https://github.com/Apurba1903/epl-top-scorer-ws"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/eplWebScrap.png" 
                                    alt="EPL Web Scraping Project" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* EPL Top Scorer End */}



                        {/* NLP Website Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">NLP Website - <em>Python Project</em></h3>

                            {/* Project Description */}
                            <p className="text-gray-400 mb-3 text-justify">
                                Developed a Flask-based web application that leverages Natural Language Processing (NLP) APIs to perform:
                                <ul className="list-disc list-inside">
                                    <li> 
                                    <strong>Named Entity Recognition (NER):</strong> Extracts entities like names, organizations, and locations from text.
                                    </li>
                                    <li>
                                    <strong>Sentiment Analysis:</strong> Determines the sentiment (positive, negative, neutral) of a given text.
                                    </li>
                                    <li>
                                    <strong>Abuse IP Check:</strong> Checks if an IP address is associated with malicious activity.
                                    </li>
                                </ul>
                            </p>
                            
                            {/* Project Technologies */}
                            <div className="flex flex-wrap gap-2 ">
                                {["Python", "Flask", "HTML", "CSS", "Render", "RapidAPI"].map((tech, key) => (
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
                                href="https://nlp-website-qr72.onrender.com/"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <span>View Project ➡️</span>
                                <img 
                                    src="images/nlpwebsite.png" 
                                    alt="NLP Website Photo" 
                                    className="mt-4 object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                                /> 
                                </a>
                            </div>
                        </div>
                        {/* NLP Website Start */}



                        {/* Tea House Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Tea House - <em>Web Development Project</em></h3>

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
                        {/* Tea House End */}



                        {/* Penguin Fashion Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Penguin Fashion - <em>Web Development Project</em></h3>

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
                        {/* Penguin Fashion End */}



                        {/* Gamer Zone Design Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Gamer Zone Design - <em>Web Development Project</em></h3>

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
                        {/* Gamer Zone Design End */}



                        {/* Biker Zone Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Biker Zone - <em>Web Development Project</em></h3>

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
                        {/* Biker Zone End */}



                        {/* Fruit Brust Frontend Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Fruit Brust Frontend - <em>Web Development Project</em></h3>

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
                        {/* Fruit Brust Frontend End */}



                        {/* Flower Shop Start */}
                        <div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px+8px_rgba(59,130,246,0.1)] transition-all"
                        >   
                            {/* Project Name */}
                            <h3 className="text-xl font-bold mb-2 ">Flower Shop - <em>Web Development Project</em></h3>

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
                        {/* Flower Shop End */}



                    </div>
            </div>
            

        </section>
    );
};