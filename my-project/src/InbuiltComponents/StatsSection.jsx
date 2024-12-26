import React, { useEffect, useState } from 'react';

const StatsSection = () => {
  const targets = [
    { id: 'clientsCount', count: 1000, suffix: '+' },
    { id: 'projectsCount', count: 5000, suffix: '+' },
    { id: 'websitesCount', count: 50, suffix: '+' },
    { id: 'experienceCount', count: 15, suffix: '+' }
  ];

  const [counts, setCounts] = useState(
    targets.reduce((acc, target) => {
      acc[target.id] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    const maxCount = Math.max(...targets.map(target => target.count));

    const animateCountUp = (target, duration) => {
      let currentCount = 0;
      const increment = Math.ceil(target.count / (duration / 10));

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
          clearInterval(interval);
          currentCount = target.count;
        }
        setCounts(prevCounts => ({
          ...prevCounts,
          [target.id]: currentCount
        }));
      }, 300);
    };

    targets.forEach(target => {
      animateCountUp(target, maxCount / 300); // Adjust duration based on max count
    });
  }, [targets]);

  return (
    <div className="border border-gray-300">

              <div className="items-start flex justify-start gap-2 mx-auto">
    
                  <div className="flex flex-col p-2 text-center">
                    <p className="order-2 text-gray-500 font-medium font-outfit text-lg mt-2 leading-[1.5rem]" id="item-1">
                      Clients Worldwide
                    </p>
                    <dd className="order-1 text-[#F0C932] font-bold font-outfit text-[3rem] leading-[3.5rem] " aria-describedby="item-1">
                      {counts['clientsCount']}
                      {targets[0].suffix}
                    </dd>
                  </div>
                  <div className="flex flex-col p-2 text-center">
                    <p className="order-2 mt-2 text-lg font-medium leading-6 font-outfit text-gray-500">
                      Web Projects Delivered
                    </p>
                    <dd className="order-1 text-[#2489D3] font-bold font-outfit text-[3rem] leading-[3.5rem] ">
                      {counts['projectsCount']}
                      {targets[1].suffix}
                    </dd>
                  </div>
                  <div className="flex flex-col p-2 text-center">
                    <p className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 ">
                      Websites Launched
                    </p>
                    <dd className="order-1 text-[#25d324] font-bold font-outfit text-[3rem] leading-[3.5rem] ">
                      {counts['websitesCount']}
                      {targets[2].suffix}
                    </dd>
                  </div>
                  <div className="flex flex-col p-2 text-center">
                    <p className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 ">
                      Years of Experience
                    </p>
                    <dd className="order-1 text-[#FE753F] font-bold font-outfit text-[3rem] leading-[3.5rem] ">
                      {counts['experienceCount']}
                      {targets[3].suffix}
                    </dd>
                  </div>

              </div>

    </div>
  );
};

export default StatsSection;