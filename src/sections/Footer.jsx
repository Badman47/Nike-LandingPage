import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants/constants"


//Footer Section:
const Footer = () => {
  return (
    <footer className="max-container mt-10">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a
            href="/">
            <img
              src={footerLogo}
              alt="footer-logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 text-white font-light sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>
          {/*Social Media Icons */}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full gap-5 transition-transform duration-300 hover:scale-110"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        {/*Footer links */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl leading-normal mb-6 font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-base leading-normal text-white hover:text-gray-600">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/*CopyRight Sign and Terms & Condition */}
      <div className="flex justify-between mt-24 text-white max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copy-right-sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="font-mono"> CopyRight. All Rights are Reserved.</p>
        </div>
        <p className="font-mono cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer