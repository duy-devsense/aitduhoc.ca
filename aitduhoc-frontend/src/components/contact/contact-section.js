/* This example requires Tailwind CSS v2.0+ */
import {
  MailIcon,
  PhoneIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";

export default function ContactSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Văn Phòng Hà Nội
            </h2>

            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <OfficeBuildingIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>#501-502-503, tầng 5 Tòa nhà công ty TEM</p>
                  <p className="mt-1">14 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>0915.59.1919</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>hanoi@aitduhoc.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Văn Phòng Tp. Hồ Chí Minh
            </h2>
           
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <OfficeBuildingIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>#23 (301 + 302) Lê Quý Đôn</p>
                  <p className="mt-1">Phường Võ Thị Sáu, Quận 3, TP.HCM</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>0903.16.0440</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>hcm@aitduhoc.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
