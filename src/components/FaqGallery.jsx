import Marquee from 'react-fast-marquee';
import image1 from '../assets/mark1.jpg';
import image2 from '../assets/mark2.jpg';
import image3 from '../assets/mark3.jpg';
import image4 from '../assets/mark4.webp';
import image5 from '../assets/mark5.jpeg';

const FaqGallery = () => {
    return (
        <div>
            <h3 className="text-white text-3xl text-center font-bold mb-5">Faq & Gallery</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                <div>
                    <Marquee className='rounded-xl' pauseOnHover={true}>
                        <img className='h-[400px]' src={image1} alt="" />
                        <img className='h-[400px]' src={image2} alt="" />
                        <img className='h-[400px]' src={image3} alt="" />
                        <img className='h-[400px]' src={image4} alt="" />
                        <img className='h-[400px]' src={image5} alt="" />
                    </Marquee>
                </div>
                <div className="space-y-2">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">can_i_create_my_own_forms_for_posting_to_workservices?</div>
                        <div className="collapse-content">
                            <p>Yes. If the fillable form can be built using Adobe Acrobat®, it can be posted to WorkServices. Here are some fillable form examples.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">can_third_party_forms_be_posted_to_workservices?</div>
                        <div className="collapse-content">
                            <p>Yes (generally). Certain forms may not work, namely, third party fillable forms locked by the originator, or forms created in a format different from Adobe Acrobat®.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">can_workservices/ar_create_or_edit_forms_for_us?</div>
                        <div className="collapse-content">
                            <p>Yes. Contact us via phone or email to discuss a form you would like created.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">can_i_create_other_administrator_users?</div>
                        <div className="collapse-content">
                            <p>Yes. The Lead Administrator account user can create sub-Administrator level users.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">can_i_create_my_own_forms_for_posting_to_workerservices?</div>
                        <div className="collapse-content">
                            <p>Yes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqGallery;