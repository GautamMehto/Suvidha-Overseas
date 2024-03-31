import React from 'react'
import { useParams } from 'react-router-dom'
// import CountryData from "./CountryData"

const Country = () => {
    const cn = useParams();
    const CountryData = [
        {
            name: "USA",

            about: "About The",
            aboutPara: "The United States of America, commonly referred to as the USA, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions. It's known for its diverse geography, rich cultural heritage, and influential role in global affairs. The USA is the world's third-largest country by total area and has a population of over 330 million people. It's a melting pot of cultures, ethnicities, and languages, making it one of the world's most ethnically diverse and multicultural nations.The USA is recognized for its strong economy, technological innovation, and leadership in various fields such as science, arts, and education. It's home to iconic landmarks like the Statue of Liberty, the Grand Canyon, and Hollywood, as well as renowned institutions like Harvard University, Silicon Valley, and the Smithsonian Institution.",

            why: "Why Study in",
            whyPara: "World-Class Universities: The USA boasts some of the world's top universities, renowned for their academic excellence, research facilities, and innovative teaching methods. Institutions like Harvard, MIT, and Stanford are globally recognized, offering students a prestigious education.Diverse Educational Opportunities: With thousands of academic institutions offering a wide range of programs, the USA provides unparalleled academic choices. Whether it's undergraduate, postgraduate, or doctoral studies, students can find courses that align with their interests and career goals.Cutting-Edge Research and Innovation: The USA is a leader in scientific and creative innovation. Students have the opportunity to engage in research that pushes the boundaries of knowledge, often with access to state-of-the-art facilities and resources.",

            Aboutimg: "https://plus.unsplash.com/premium_photo-1668447247220-1c000b469d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VVNBJTIwY291bnRyeXxlbnwwfHwwfHx8MA%3D%3D",
            Whyimg: "https://images.unsplash.com/photo-1638803764575-7f1289d29849?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVTQSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
        },
        {
            name: "Germany",

            about: "About The",
            aboutPara: "Germany, located in the heart of Europe, is a country with a rich history, diverse landscapes, and a strong economic standing. It's the largest economy in Europe and the fourth-largest in the world, known for its precision engineering, high-tech products, and innovation. Germany boasts a variety of landscapes, from the majestic Alps in the south to the scenic coastlines of the North Sea and the Baltic Sea. It's a country with a deep cultural heritage, evident in its world-famous festivals like Oktoberfest, historic cities such as Berlin and Munich, and contributions to art, philosophy, and science. Germany is renowned for its commitment to sustainability and environmental protection, making it a leader in renewable energy and green technologies. It's a country that values education, research, and innovation, with a social market economy that combines capitalist economic policies with social welfare programs.",

            why: "Why Study in",
            whyPara: "High-Quality Education: German universities are recognized globally for their academic excellence, rigorous standards, and focus on research. Germany offers a wide range of universities, including traditional universities, universities of applied sciences (Fachhochschulen), and technical universities, catering to various academic and professional interests. No Tuition Fees at Public Universities: One of the most compelling reasons to study in Germany is the absence of tuition fees at undergraduate and PhD levels at public universities, making higher education accessible to a broader range of students. A nominal university administration fee is charged, which often includes a public transport ticket for the semester. Wide Range of Programs in English: For international students who do not speak German, there are numerous programs offered in English, particularly at the postgraduate level. This makes Germany an attractive destination for students from around the world.",

            Aboutimg: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
            Whyimg: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "England",

            about: "About The",
            aboutPara: "England, a country within the United Kingdom, is rich in history, culture, and academic excellence. Known for its iconic landmarks such as Big Ben, Stonehenge, and the Tower of London, England offers a blend of historical significance and modern innovation. It boasts some of the world's most vibrant cities, including London, Manchester, and Liverpool, each with its unique cultural and social scene. England's contributions to literature, science, and art are globally recognized, being the birthplace of Shakespeare, Isaac Newton, and the Beatles. The country is celebrated for its traditional and contemporary contributions to global culture and thought leadership. With its diverse landscapes, from the rolling hills of the Cotswolds to the rugged coastlines of Cornwall, England offers a variety of natural beauty to explore. The country's commitment to education and research has established it as a hub for academic excellence and innovation.",

            why: "Why Study in",
            whyPara: "World-Class Universities: The USA boasts some of the world's top universities, renowned for their academic excellence, research facilities, and innovative teaching methods. Institutions like Harvard, MIT, and Stanford are globally recognized, offering students a prestigious education.Diverse Educational Opportunities: With thousands of academic institutions offering a wide range of programs, the USA provides unparalleled academic choices. Whether it's undergraduate, postgraduate, or doctoral studies, students can find courses that align with their interests and career goals.Cutting-Edge Research and Innovation: The USA is a leader in scientific and creative innovation. Students have the opportunity to engage in research that pushes the boundaries of knowledge, often with access to state-of-the-art facilities and resources.",

            Aboutimg: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
            Whyimg: "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "Canada",

            about: "About The",
            aboutPara: "The United States of America, commonly referred to as the USA, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions. It's known for its diverse geography, rich cultural heritage, and influential role in global affairs. The USA is the world's third-largest country by total area and has a population of over 330 million people. It's a melting pot of cultures, ethnicities, and languages, making it one of the world's most ethnically diverse and multicultural nations.The USA is recognized for its strong economy, technological innovation, and leadership in various fields such as science, arts, and education. It's home to iconic landmarks like the Statue of Liberty, the Grand Canyon, and Hollywood, as well as renowned institutions like Harvard University, Silicon Valley, and the Smithsonian Institution.",

            why: "Why Study in",
            whyPara: "World-Class Universities: The USA boasts some of the world's top universities, renowned for their academic excellence, research facilities, and innovative teaching methods. Institutions like Harvard, MIT, and Stanford are globally recognized, offering students a prestigious education.Diverse Educational Opportunities: With thousands of academic institutions offering a wide range of programs, the USA provides unparalleled academic choices. Whether it's undergraduate, postgraduate, or doctoral studies, students can find courses that align with their interests and career goals.Cutting-Edge Research and Innovation: The USA is a leader in scientific and creative innovation. Students have the opportunity to engage in research that pushes the boundaries of knowledge, often with access to state-of-the-art facilities and resources.",

            Aboutimg: "https://images.unsplash.com/photo-1638803764575-7f1289d29849?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFVTQSUyMGNvdW50cnl8ZW58MHx8MHx8fDA%3D",
            Whyimg: "https://plus.unsplash.com/premium_photo-1668447247220-1c000b469d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VVNBJTIwY291bnRyeXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "New Zealand",

            about: "About The",
            aboutPara: "Germany, located in the heart of Europe, is a country with a rich history, diverse landscapes, and a strong economic standing. It's the largest economy in Europe and the fourth-largest in the world, known for its precision engineering, high-tech products, and innovation. Germany boasts a variety of landscapes, from the majestic Alps in the south to the scenic coastlines of the North Sea and the Baltic Sea. It's a country with a deep cultural heritage, evident in its world-famous festivals like Oktoberfest, historic cities such as Berlin and Munich, and contributions to art, philosophy, and science. Germany is renowned for its commitment to sustainability and environmental protection, making it a leader in renewable energy and green technologies. It's a country that values education, research, and innovation, with a social market economy that combines capitalist economic policies with social welfare programs.",

            why: "Why Study in",
            whyPara: "High-Quality Education: German universities are recognized globally for their academic excellence, rigorous standards, and focus on research. Germany offers a wide range of universities, including traditional universities, universities of applied sciences (Fachhochschulen), and technical universities, catering to various academic and professional interests. No Tuition Fees at Public Universities: One of the most compelling reasons to study in Germany is the absence of tuition fees at undergraduate and PhD levels at public universities, making higher education accessible to a broader range of students. A nominal university administration fee is charged, which often includes a public transport ticket for the semester. Wide Range of Programs in English: For international students who do not speak German, there are numerous programs offered in English, particularly at the postgraduate level. This makes Germany an attractive destination for students from around the world.",

            Aboutimg: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
            Whyimg: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "Australia",

            about: "About The",
            aboutPara: "England, a country within the United Kingdom, is rich in history, culture, and academic excellence. Known for its iconic landmarks such as Big Ben, Stonehenge, and the Tower of London, England offers a blend of historical significance and modern innovation. It boasts some of the world's most vibrant cities, including London, Manchester, and Liverpool, each with its unique cultural and social scene. England's contributions to literature, science, and art are globally recognized, being the birthplace of Shakespeare, Isaac Newton, and the Beatles. The country is celebrated for its traditional and contemporary contributions to global culture and thought leadership. With its diverse landscapes, from the rolling hills of the Cotswolds to the rugged coastlines of Cornwall, England offers a variety of natural beauty to explore. The country's commitment to education and research has established it as a hub for academic excellence and innovation.",

            why: "Why Study in",
            whyPara: "World-Class Universities: The USA boasts some of the world's top universities, renowned for their academic excellence, research facilities, and innovative teaching methods. Institutions like Harvard, MIT, and Stanford are globally recognized, offering students a prestigious education.Diverse Educational Opportunities: With thousands of academic institutions offering a wide range of programs, the USA provides unparalleled academic choices. Whether it's undergraduate, postgraduate, or doctoral studies, students can find courses that align with their interests and career goals.Cutting-Edge Research and Innovation: The USA is a leader in scientific and creative innovation. Students have the opportunity to engage in research that pushes the boundaries of knowledge, often with access to state-of-the-art facilities and resources.",

            Aboutimg: "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
            Whyimg: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
    ]
    return (
        <>
            {
                CountryData.map((item, index) => {
                    console.log(item.name)
                    if (item.name === cn.countryName) {
                        return <>
                            <div className='Country-Page w-full min-h-[100vh]'>
                                <div className='Url-Container w-full h-[50vh] bg-[url("https://images.unsplash.com/photo-1589401901631-356b7ae2f5d1?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-right relative'>
                                    <div className='w-full h-full bg-slate-500/50 flex items-center justify-center'>
                                        <h1 className='Url-Heading text-5xl text-white'>Home/Top {item.name} Study</h1>
                                    </div>
                                </div>
                                <div className="CountryTop w-full h-auto pt-16 pb-5 pr-5 gap-10 flex justify-between items-center">
                                    <div className='Country-Img-Container rounded-tr-full rounded-br-full min-w-[30vw] max-h-[50vh] overflow-hidden'>
                                        <img src={item.Aboutimg} alt="" className='h-full object-cover' />
                                    </div>
                                    <div className='Country-Detail flex flex-col items-end gap-5 relative'>
                                        <img src="Resource/course-shape-1.png" alt="" className='w-[80px] absolute left-[0%] top-[0%] animate-[moveTopTo_5s_linear_infinite]' />
                                        <h1 className="About-Heading w-4/5 text-6xl font-extrabold capitalize text-wrap mb-1 text-end">
                                            {item.about} {item.name} .
                                        </h1>
                                        <p className='text-justify'>
                                            {item.aboutPara}
                                        </p>
                                    </div>
                                </div>
                                <div className="CountryBottom w-full h-auto pb-16 pt-5 pl-5 gap-10 flex flex-row-reverse justify-between items-center relative">
                                <div className='Country-Img-Container rounded-tl-full rounded-bl-full min-w-[30vw] max-h-[45vh] overflow-hidden'>
                                    <img src={item.Whyimg} alt="" className='h-full object-cover' />
                                </div>
                                    <div className='Country-Detail flex flex-col items-start gap-5 relative'>
                                        <img src="esource/course-shape-2.png" alt="" className='w-[80px] absolute right-[0%] top-[0%] animate-[moveTopTo_8s_linear_infinite]' />
                                        <h1 className="About-Heading w-4/5 text-6xl font-extrabold  capitalize text-wrap mb-1 text-start">
                                            {item.why} {item.name} ?
                                        </h1>
                                        <p className='text-justify'>
                                            {item.whyPara}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                })
            }

        </>
    )
}

export default Country