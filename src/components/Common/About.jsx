import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from "react-slick";
import Footer from './Footer';

// 🟡 Brand Logo
import Carbliss from "../../assets/Images/StampCarbliss.png";

// 🟢 Founders
import Founder2 from "../../assets/Images/Founder2.jpg";
import Founder3 from "../../assets/Images/Founders3.jpg";

// 🔵 Media Logos
import Enterpreneur from "../../assets/Images/Enterpreneur.png";
import Forbes from "../../assets/Images/Forbes.png";
import UsaToday from "../../assets/Images/Usatoday.png";
import Inc5000 from "../../assets/Images/Inc5000.png";

// 🟣 Factory Images
import Factory1 from "../../assets/Images/Factory1.jpg";
import Factory2 from "../../assets/Images/Factory2.jpg";
import Factory4 from "../../assets/Images/Factory4.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const containerRef = useRef(null);
    const foundersRef = useRef(null);
    const seenOnRef = useRef(null);
    const carblissRef = useRef(null);

    const featuredArticles = [
        {
            id: "enterpreneur",
            title: "Carbliss Redefines the RTD Cocktail Category",
            description:
                "In a feature on Entrepreneur, Carbliss was recognized for breaking convention in the ready-to-drink space. By using real vodka and removing sugar, carbs, and gluten, the brand has created a clean cocktail that appeals to health-conscious consumers. Its rapid growth reflects a rising demand for better, bolder beverage choices.",
            logo: Enterpreneur,
            image: Factory1,
            logoWidth: "100px",
            link: "https://www.entrepreneur.com/growing-a-business/why-successful-brands-should-embrace-radical-transparency/472395"
        },
        {
            id: "usatoday",
            title: "Carbliss Gains National Attention for Its Clean Cocktail Innovation",
            description:
                "USA Today spotlighted Carbliss as a standout in the booming canned cocktail market. With a commitment to transparency and clean ingredients, the brand’s no-sugar, no-carb formula has resonated with modern drinkers looking for healthier, guilt-free options — without sacrificing flavor.",
            logo: UsaToday,
            image: Factory2,
            logoWidth: "80px",
            link: "https://www.usatoday.com/story/special/contributor-content/2023/10/23/behind-the-beverage-empire-how-adam-kroener-is-transforming-the-ready-to-drink-cocktail-sector/71291275007/"
        },
        {
            id: "forbes",
            title: "Carbliss Disrupts Canned Cocktail Space with Real Vodka, Zero Sugar",
            description:
                "Forbes recognized Carbliss for its bold departure from typical malt-based seltzers. Built on authenticity and health-conscious values, the brand leverages real vodka and natural flavors — eliminating sugar, carbs, and gluten — to redefine what a ready-to-drink cocktail can be.",
            logo: Forbes,
            image: Factory4,
            logoWidth: "70px",
            link: "https://www.forbes.com/sites/jeanettehurt/2021/08/01/wisconsin-entrepreneurs-take-on-big-seltzer-with-carbliss/"
        },
        {
            id: "inc5000",
            title: "Carbliss Named to Inc. 5000 List of Fastest-Growing Private Companies",
            description:
                "Carbliss earned a spot on the prestigious Inc. 5000 list, recognized for its rapid growth and disruptive approach to the ready-to-drink cocktail industry. Fueled by consumer demand for clean, flavorful beverages without sugar or carbs, Carbliss has proven that health-conscious innovation can lead to remarkable success.",
            logo: Inc5000,
            image: Founder3,
            logoWidth: "70px",
            link: "https://www.inc.com/profile/carbliss"
        }
    ];

    const carblissReviews = [
        {
            review: `Carbliss is a total game-changer. I’ve tried so many canned cocktails, but nothing comes close to how fresh and real this tastes. No sugar and still so flavorful`,
            writtenBy: "Jessica M., Los Angeles"
        },
        {
            review: "I was skeptical about the 'zero sugar' claim, but wow — Carbliss tastes amazing without being overly sweet. It’s become my weekend favorite.",
            writtenBy: "Brandon T., Minneapolis"
        },
        {
            review: "As someone following a low-carb lifestyle, finding a cocktail like Carbliss feels like a win. Guilt-free and delicious? Yes please.",
            writtenBy: "Anika S., New York"
        },
        {
            review: "The Lemon and Black Cherry flavors are my absolute favorites. It’s so refreshing to drink something that’s light but still feels like a treat.",
            writtenBy: "David R., Atlanta"
        },
        {
            review: "I brought a pack of Carbliss to a bonfire and everyone asked where I got it. Clean, crisp, and no weird aftertaste like other canned drinks.",
            writtenBy: "Michelle W., Seattle"
        },
        {
            review: "Carbliss nails the balance between fun and healthy. It’s a premium drink that doesn’t compromise on ingredients or experience.",
            writtenBy: "Tyler G., Denver"
        }
    ];


    useEffect(() => {
        const cards = gsap.utils.toArray('.article-card');

        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    once: true,
                },
                opacity: 0,
                y: 50,
                duration: 0.2,
                ease: 'power2.out',

            });
        });

        const logoRow = seenOnRef.current?.querySelector('.seen-logos');
        if (logoRow) {
            gsap.set(logoRow, { gap: '10rem' });

            gsap.to(logoRow, {
                scrollTrigger: {
                    trigger: seenOnRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true,
                },
                gap: '4rem',
                duration: 1,
                ease: 'power2.out',
            });
        }

        const left = foundersRef.current.querySelector('.founder-left');
        const right = foundersRef.current.querySelector('.founder-right');

        gsap.from(left, {
            scrollTrigger: {
                trigger: foundersRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true,
            },
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power2.out',
        });

        gsap.from(right, {
            scrollTrigger: {
                trigger: foundersRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true,
            },
            opacity: 0,
            x: 100,
            duration: 1,
            ease: 'power2.out',
        });

        const carblissLeft = carblissRef.current?.querySelector('.carbliss-left');
        const carblissRight = carblissRef.current?.querySelector('.carbliss-right');

        if (carblissLeft && carblissRight) {
            gsap.from(carblissLeft, {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: 'power2.out',
            });

            gsap.from(carblissRight, {
                opacity: 0,
                x: 100,
                duration: 1,
                ease: 'power2.out',
                delay: 0.2,
            });
        }
        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="w-full h-fit bg-[#fff2e7]">
            {/* 🔵 Desktop View */}
            <div className="hidden lg:flex flex-col overflow-x-hidden px-[2rem] py-[3rem]">
                <div className="w-full h-screen px-[2rem]">
                    <div ref={carblissRef} className="w-full h-full flex items-center justify-center">
                        <div className="carbliss-left w-1/2 h-full font-[antonio] flex items-center justify-center text-center px-4">
                            <h1 className="text-[1.4rem] leading-relaxed font-medium">
                                Carbliss is a premium ready-to-drink vodka cocktail <br />
                                made with real vodka and natural ingredients. <br />
                                <span className="font-semibold">No sugar, no carbs, no gluten.</span> Perfect for keto or clean living, <br />
                                it delivers bold flavor without the guilt.
                            </h1>
                        </div>
                        <div className="carbliss-right w-1/2 h-full flex items-center justify-center">
                            <img src={Carbliss} alt="Carbliss Can" className="w-[400px] h-[400px]" />
                        </div>
                    </div>
                </div>
                <div ref={foundersRef} className='w-full h-screen flex items-center justify-center overflow-x-hidden'>
                    <div className='founder-left w-1/2 h-full flex flex-col items-center justify-center'>
                        <img src={Founder2} alt="" className='rounded-xl' />
                        <h1 className='font-[proxima] mt-4'>
                            Founders - Adam Kroener and Amanda Kroener
                        </h1>
                    </div>
                    <div className='founder-right w-1/2 h-full font-[antonio] flex items-center justify-center px-[2rem] text-center'>
                        <h1 className='text-[1.2rem] leading-relaxed font-medium'>
                            In 2019, Adam and Amanda Kroener, <br /> a husband-and-wife team from Wisconsin, <br /> launched Carbliss after years of experimenting in their home kitchen. They wanted a drink that delivered real flavor without sugar, carbs, or gluten and turned their idea into a fast-growing, nationally loved brand.
                        </h1>
                    </div>
                </div>
                <div className='w-full h-fit py-[3rem] flex flex-col gap-[1rem]' ref={seenOnRef}>
                    <div className='w-full h-fit flex justify-center items-center'>
                        <h1 className='text-[1.5rem] font-[antonio]'>As Seen On</h1>
                    </div>
                    <div className='w-full h-fit flex items-center justify-center gap-[4rem] seen-logos'>
                        <div><img src={Enterpreneur} alt="" className='w-[120px]' /></div>
                        <div><img src={Inc5000} alt="" className='w-[80px]' /></div>
                        <div><img src={Forbes} alt="" className='w-[90px]' /></div>
                        <div><img src={UsaToday} alt="" className='w-[90px]' /></div>
                    </div>
                </div>
                <div className='w-full h-fit py-[1rem] flex items-center justify-center'>
                    <div
                        className='w-full h-fit flex items-center justify-center flex-col'
                        ref={containerRef}
                    >
                        {featuredArticles.map((article, index) => (
                            <div
                                key={article.id}
                                id={article.id}
                                onClick={() => window.open(article.link, "_blank")}
                                className={`article-card group w-full h-fit flex border-2 border-gray-300 rounded-xl px-[1rem] py-[1rem] items-center justify-center gap-[2rem] cursor-pointer hover:opacity-90 hover:bg-gray-100 hover:shadow-md transition-all duration-300 ${index !== 0 ? 'mt-[2rem]' : ''}`}
                            >
                                <div className='w-[80%] h-fit flex flex-col gap-[4rem]'>
                                    <div className='w-full h-full gap-[2rem] font-[proxima] flex items-start justify-center flex-col'>
                                        <h1 className='text-[1.5rem]'>{article.title}</h1>
                                        <h3>{article.description}</h3>
                                    </div>
                                    <div className='w-full h-[10%] flex items-end justify-end'>
                                        <img
                                            src={article.logo}
                                            alt=""
                                            style={{ width: article.logoWidth }}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className='w-[20%] overflow-hidden rounded-2xl'>
                                    <img
                                        src={article.image}
                                        alt=""
                                        className='w-full h-[275px] object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.15]'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slider-container w-full h-fit py-[4rem] bg-[#ffe5d0]">
                    <div className='w-full flex items-center py-[3rem] justify-center text-[4rem] font-[antonio] text-[#1a1a1a]'>
                        <h1>Sips, Smiles & Shoutouts</h1>
                    </div>
                    <Slider {...settings}>
                        {carblissReviews.map((item, index) => (
                            <div key={index} className='w-[100%] h-full px-4'>
                                <div className="w-full h-[49vh] bg-[#fff4ec] border border-gray-400 p-6 rounded-xl shadow-lg flex flex-col justify-between">
                                    <h3 className="text-[1.5rem] w-[80%] font-medium italic font-[proxima] text-gray-800">
                                        "{item.review}"
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-600 font-semibold text-right">
                                        — {item.writtenBy}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>

            {/* 🟡 Tablet View */}
            <div className="hidden md:flex flex-col px-[2rem] py-[3rem] lg:hidden">
                <div className='w-full h-screen px-[2rem]'>
                    <div className='w-full h-full flex flex-col items-center justify-center'>
                        <div className='carbliss-left w-full h-1/2 pt-[10rem] font-[antonio] flex items-center justify-center text-center'>
                            <h1 className='text-[1.4rem] leading-relaxed font-medium'>
                                Carbliss is a premium ready-to-drink vodka cocktail <br /> made with real vodka and natural ingredients. <br />
                                <span className='font-semibold'>No sugar, no carbs, no gluten.</span> Perfect for keto or clean living, <br /> it delivers bold flavor without the guilt.
                            </h1>
                        </div>
                        <div className='carbliss-right w-full h-1/2 flex items-center justify-center'>
                            <img src={Carbliss} alt="" className='w-[450px] h-[450px]' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit flex-col flex items-center justify-center'>
                    <div className='founder-left w-full h-fit flex-col flex items-center justify-center'>
                        <img src={Founder2} alt="" className='rounded-xl w-[450px] h-[450px]' />
                        <h1 className='font-[proxima]'>Founders - Adam Kroener and Amanda Kroener</h1>
                    </div>
                    <div className='founder-right w-fit h-full font-[antonio] flex items-center justify-center py-[2rem] text-center'>
                        <h1 className='text-[1.2rem] leading-relaxed font-medium'>
                            In 2019, Adam and Amanda Kroener, <br /> a husband-and-wife team from Wisconsin, <br /> launched Carbliss after years of experimenting in their home kitchen. They wanted a drink that delivered real flavor without sugar, carbs, or gluten and turned their idea into a fast-growing, nationally loved brand.
                        </h1>
                    </div>
                </div>
                <div className='w-full py-[3rem] h-fit flex flex-col gap-[1rem]'>
                    <div className='w-full h-fit flex justify-center items-center'>
                        <h1 className='text-[1.5rem] font-[antonio]'>As Seen On</h1>
                    </div>
                    <div className='w-full h-fit flex items-center justify-center gap-[4rem] seen-logos'>
                        <div><img src={Enterpreneur} alt="" className='w-[120px]' /></div>
                        <div><img src={Inc5000} alt="" className='w-[80px]' /></div>
                        <div><img src={Forbes} alt="" className='w-[90px]' /></div>
                        <div><img src={UsaToday} alt="" className='w-[90px]' /></div>
                    </div>
                </div>
                <div className='w-full h-fit py-[1rem] flex items-center justify-center'>
                    <div ref={containerRef} className='w-full h-fit flex items-center justify-center flex-col'>
                        {featuredArticles.map((article, index) => (
                            <div
                                key={article.id}
                                id={article.id}
                                onClick={() => window.open(article.link, "_blank")}
                                className={`article-card w-full h-fit flex flex-col md:flex-row border-2 border-gray-300 rounded-xl px-[1rem] py-[1rem] items-center justify-center gap-[2rem] cursor-pointer ${index !== 0 ? 'mt-[2rem]' : ''}`}
                            >
                                <div className='w-full md:w-[70%] h-fit flex flex-col gap-[4rem]'>
                                    <div className='w-full h-full gap-[2rem] font-[proxima] flex items-start justify-center flex-col'>
                                        <h1 className='text-[1.5rem]'>{article.title}</h1>
                                        <h3>{article.description}</h3>
                                    </div>
                                    <div className='w-full h-[10%] flex items-end justify-end'>
                                        <img src={article.logo} alt="" className={`w-[${article.logoWidth}]`} />
                                    </div>
                                </div>
                                <div className='w-[30%]'>
                                    <img src={article.image} alt="" className='w-full h-[400px] object-cover rounded-2xl' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slider-container w-full h-fit py-[4rem] bg-gradient-to-b from-[#fdfdfb] to-[#f2f2f2]">
                    <div className='w-full flex items-center py-[1rem] justify-center text-[4rem] font-[antonio] text-[#1a1a1a]'>
                        <h1>Sips, Smiles & Shoutouts</h1>
                    </div>
                    <Slider {...settings}>
                        {carblissReviews.map((item, index) => (
                            <div key={index} className='w-[100%] h-full px-4'>
                                <div className="w-full h-[20vh] bg-white border border-gray-400 p-6 rounded-xl shadow-lg flex flex-col justify-between">
                                    <h3 className="text-[1.5rem] w-[80%] font-medium italic font-[proxima] text-gray-800">
                                        "{item.review}"
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-600 font-semibold text-right">
                                        — {item.writtenBy}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* 🔴 Mobile View */}
            <div className="flex flex-col md:hidden overflow-hidden">
                <div className='w-full h-fit px-[2rem]'>
                    <div className='w-full h-fit flex flex-col items-center justify-start pt-[4rem]'>
                        <div className='carbliss-left w-full h-fit py-[2rem] font-[antonio] flex items-center justify-center text-center'>
                            <h1 className='text-[0.9rem] leading-relaxed font-medium'>
                                Carbliss is a premium ready-to-drink vodka cocktail <br /> made with real vodka and natural ingredients. <br />
                                <span className='font-semibold'>No sugar, no carbs, no gluten.</span> Perfect for keto or clean living, <br /> it delivers bold flavor without the guilt.
                            </h1>
                        </div>
                        <div className='carbliss-right w-full h-fit py-[3rem] flex items-center justify-center'>
                            <img src={Carbliss} alt="" className='w-[250px] h-[250px]' />
                        </div>
                    </div>
                </div>
                <div  className='w-full h-fit flex-col flex items-center justify-center'>
                    <div className='founder-left w-full h-fit flex-col flex items-center justify-center'>
                        <img src={Founder2} alt="" className='rounded-xl w-[250px] h-[250px]' />
                        <h1 className='font-[proxima] text-[0.6rem]'>Founders - Adam Kroener and Amanda Kroener</h1>
                    </div>
                    <div className='founder-right w-fit h-fit font-[antonio] flex items-center justify-center py-[2rem] text-center'>
                        <h1 className='text-[0.9rem] px-[2rem] leading-relaxed font-medium'>
                            In 2019, Adam and Amanda Kroener, <br /> a husband-and-wife team from Wisconsin, <br /> launched Carbliss after years of experimenting in their home kitchen. They wanted a drink that delivered real flavor without sugar, carbs, or gluten and turned their idea into a fast-growing, nationally loved brand.
                        </h1>
                    </div>
                </div>
                <div className='w-full py-[2rem] h-fit flex flex-col gap-[0.5rem]'>
                    <div className='w-full h-fit flex justify-center items-center'>
                        <h1 className='text-[1.2rem] font-[antonio]'>As Seen On</h1>
                    </div>
                    <div className='w-full h-fit flex items-center justify-evenly seen-logos'>
                        <div><img src={Enterpreneur} alt="" className='w-[90px]' /></div>
                        <div><img src={Inc5000} alt="" className='w-[55px]' /></div>
                        <div><img src={Forbes} alt="" className='w-[70px]' /></div>
                        <div><img src={UsaToday} alt="" className='w-[70px]' /></div>
                    </div>
                </div>
                <div className='w-full h-fit py-[1rem] flex items-center justify-center px-[1rem]'>
                    <div ref={containerRef} className='w-full h-fit flex items-center justify-center flex-col'>
                        {featuredArticles.map((article, index) => (
                            <div
                                key={article.id}
                                id={article.id}
                                className={`article-card w-full h-fit flex flex-col md:flex-row border-2 border-gray-300 rounded-xl px-[1rem] py-[1rem] items-center justify-center ${index !== 0 ? 'mt-[2rem]' : ''}`}
                            >
                                <div className='w-[70%] h-fit flex flex-col gap-[2rem]'>
                                    <div className='w-full h-full gap-[1.5rem] font-[proxima] flex items-start justify-center flex-col'>
                                        <h1 className='text-[1.5rem]'>{article.title}</h1>
                                        <h3 className='text-[0.95rem]'>{article.description}</h3>
                                    </div>
                                    <div className='w-full h-fit flex items-end justify-end'>
                                        <img src={article.logo} alt="" className={`w-[${article.logoWidth}]`} />
                                    </div>
                                </div>
                                <div className='w-full md:w-[30%] h-[200px]'>
                                    <img
                                        src={article.image}
                                        alt=""
                                        className='w-full h-full object-cover rounded-2xl'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slider-container w-full h-fit py-[2rem] bg-gradient-to-b from-[#fdfdfb] to-[#f2f2f2]">
                    <div className='w-full flex items-center py-[1rem] justify-center text-[1.7rem] font-[antonio] text-[#1a1a1a]'>
                        <h1>Sips, Smiles & Shoutouts</h1>
                    </div>
                    <Slider {...settings}>
                        {carblissReviews.map((item, index) => (
                            <div key={index} className='w-[100%] h-full px-4'>
                                <div className="w-full h-[22vh] bg-white border border-gray-400 p-6 rounded-xl shadow-lg flex flex-col justify-between">
                                    <h3 className="text-[1.1rem] w-[80%] font-medium italic font-[proxima] text-gray-800">
                                        "{item.review}"
                                    </h3>
                                    <p className="mt-4 text-sm text-gray-600 font-semibold text-right">
                                        — {item.writtenBy}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;