import testimonialData from '@/components/data/cbam-page-data';


const TestimonialMain = ({addClass}) => {
    return (
        <>
  
        <div className={`testimonial__two section-padding ${addClass}`}>
            <div className="container">
                <div className="row align justify-content-end">
                    {testimonialData.map((data,id) => (
                        <div className="col-lg-8 col-md-8" key={id}>
                            <div className="testimonial__two-item">
                                <div className="testimonial__two-item-content">
                                    <i className="flaticon-straight-quotes"></i>
                                    <p>{data.des}</p>
                                    <div className="testimonial__two-item-content-bottom">
                                        <div className="testimonial__two-item-content-bottom-author dark_image">
                                            <img src={data.avatar.src} alt="avatar" />
                                            <div className="testimonial__two-item-content-bottom-author-info">
                                                <h6>{data.name}</h6>
                                                <span>{data.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default TestimonialMain;