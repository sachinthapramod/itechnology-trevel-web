// Synchronized Counter Component - Uses data from admin dashboard
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import completeSyncService from '../../services/completeSyncService';

const CounterOneSync = () => {
    const [statistics, setStatistics] = useState([]);
    const [loading, setLoading] = useState(true);

    // Use intersection observer to detect when component is in view
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        loadStatistics();
        
        // Subscribe to statistics changes
        const unsubscribe = completeSyncService.subscribe('statistics', (updatedStatistics) => {
            setStatistics(updatedStatistics);
        });

        return () => unsubscribe();
    }, []);

    const loadStatistics = async () => {
        try {
            setLoading(true);
            const statisticsData = await completeSyncService.getStatisticsForHomePage();
            setStatistics(statisticsData);
        } catch (error) {
            console.error('Error loading statistics:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="counter-area space" ref={ref}>
                <div className="container shape-mockup-wrap">
                    <div className="row">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="col-sm-6 col-xl-3 counter-card-wrap">
                                <div className="counter-card">
                                    <div className="counter-shape"><span></span></div>
                                    <div className="media-body">
                                        <h3 className="box-number">Loading...</h3>
                                        <h6 className="counter-title">Loading...</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="counter-area space" ref={ref}>
            <div className="container shape-mockup-wrap">
                <div className="row">
                    {statistics.map((stat, index) => (
                        <div key={stat.id || index} className="col-sm-6 col-xl-3 counter-card-wrap">
                            <div className="counter-card">
                                <div className="counter-shape"><span></span></div>
                                <div className="media-body">
                                    <h3 className="box-number">
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                        {stat.suffix}
                                    </h3>
                                    <h6 className="counter-title">{stat.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xl-block"
                    data-top="30%"
                    data-left="-15%"
                >
                    <img src="assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{top:"45%", left:"-13%"}}
                >
                    <img src="assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xl-block"
                    style={{top:"32%", left:"-7%"}}
                >
                    <img src="assets/img/shape/shape_3.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup d-none d-xl-block"
                    style={{bottom:"-24%", left:"-15%"}}
                >
                    <img src="assets/img/shape/shape_6.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup jump d-none d-xl-block"
                    data-top="5%"
                    data-right="-10%"
                    style={{top:"5%", right:"-10%"}}
                >
                    <img src="assets/img/shape/shape_5.png" alt="shape" />
                </div>
            </div>
        </div>
    );
};

export default CounterOneSync;
