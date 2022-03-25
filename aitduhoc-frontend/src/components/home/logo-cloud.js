/* This example requires Tailwind CSS v2.0+ */
export default function LogoCloud() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Đại diện chính thức cho các trường top ở Canada
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Qua nhiều năm hoạt động chuyên sâu trong hệ thống giáo dục của Canada, AIT đã thiết lập được những mối quan hệ mật thiết với các trường cao đẳng và đại học tiêu biểu với bằng chức và kết quả học tập được công nhận quốc tế.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-color1 bg-orange-200 hover:bg-orange-300"
                >
                  Xem Thêm
                </a>
              </div>
              {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    Contact Us
                  </a>
                </div> */}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-1 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center bg-gray-50 p-2">
              <img
                className="max-h-30"
                src="https://aitduhoc.com/wp-content/uploads/2022/02/Group-637.jpg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 p-2">
              <img
                className="max-h-30"
                src="https://aitduhoc.com/wp-content/uploads/2022/02/Group-643.jpg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 p-2">
              <img
                className="max-h-30"
                src="https://aitduhoc.com/wp-content/uploads/2022/02/Group-652.jpg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 p-2">
              <img
                className="max-h-30"
                src="https://aitduhoc.com/wp-content/uploads/2022/02/Group-645.jpg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 p-2">
              <img
                className="max-h-30"
                src="https://aitduhoc.com/wp-content/uploads/2022/02/Group-666.jpg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 p-2">
              <img
                className="max-h-30"
                src="https://aitduhoc.com/wp-content/uploads/2022/02/Group-664.jpg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
