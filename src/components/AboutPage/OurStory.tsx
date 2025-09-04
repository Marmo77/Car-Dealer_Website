import StoryImg from "@/assets/imgs/Hero_bg.jpg";

const OurStory = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-raleway text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 font-montserrat text-gray-600 leading-relaxed">
              <p>
                Prestige Motors was born from a simple belief: luxury car buying
                should be as extraordinary as the vehicles themselves. Founded
                by automotive enthusiast Michael Stevens in 2010, we began as a
                boutique dealership with an unwavering commitment to excellence.
              </p>
              <p>
                What started as a passion project has evolved into the region's
                most trusted luxury automotive destination. Our success stems
                from understanding that each client has unique needs and dreams,
                and every vehicle tells a story of engineering mastery and
                artistic vision.
              </p>
              <p>
                Today, we continue to set new standards in luxury automotive
                retail, combining traditional values of personal service with
                cutting-edge technology and innovation. Our curated collection
                represents the pinnacle of automotive achievement from the
                world's most prestigious manufacturers.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={StoryImg}
                alt="Prestige Motors luxury showroom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
