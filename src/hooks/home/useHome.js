import {useState, useMemo, useEffect} from 'react';
import hanuju  from '../../assets/images/hanuju.jpg';
import Samseongrakan from '../../assets/images/Samseongrakan.jpg';
import GangMeong from '../../assets/images/GangMeong.jpg';
import jeli from '../../assets/images/jeli.jpg';





function useHome() {
    const allProjects = useMemo(() => [
        {
            id: 1,
            title: "Weather App",
            description: "대우주(React 기반 날씨 앱 프로젝트)",
            image: hanuju,
            category:"Web",
            link: "https://example.com/Weather-app"
        },
        {
            id: 2,
            title: "Todo List",
            description: "대삼칸(리엑트 상태콴리를 배운 TODO 리스트)",
            image: Samseongrakan,
            category:"Web",
            link: "https://example.com/Weather-app"
        },
        {
            id: 3,
            title: "Portfolio site",
            description: "대 강멍(나의 작업을 보여주는 포트폴리오)",
            image: GangMeong,
            category:"Web",
            link: "https://example.com/Weather-app"
        },
        {
            id: 4,
            title: "Moblie UI Design",
            description: "대 젤먹(나의 작업을 보여주는 포트폴리오)",
            image:jeli,
            category:"Web",
            link: "https://example.com/Weather-app"
        }
    ], []);

    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects(allProjects);
        }, 500);

        return () => clearTimeout(timer);
    }, [allProjects]);

    useEffect(() => {
        if(activeCategory === 'All') {
            setProjects(allProjects);
        } else {
            const filtered = allProjects.filter(projects => projects.category === activeCategory);
            setProjects(filtered);
        }
    }, [activeCategory, allProjects]);

        useEffect(() => {
            if(isDarkMode) {
                document.body.classList.add('dark-mode');
            }else {
                document.body.classList.remove('dark-mode');
            }
        }, [isDarkMode]);

        const handleCategoryChange = (category) => {
            setActiveCategory(category);
        };

        const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode);
        };

        return {
            projects,
            activeCategory,
            handleCategoryChange,
            isDarkMode,
            toggleDarkMode
        };
}

export default useHome;