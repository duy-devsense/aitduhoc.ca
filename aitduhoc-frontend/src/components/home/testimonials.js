/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
    {
      name: 'Nguyễn Thu Hà',
      role: 'Thạc sỹ - Đại học British Columbia',
      imageUrl:
        'http://aitduhoc.com/wp-content/uploads/2022/01/Unjgjkktitled-2.jpg',
      bio: 'Hai từ “Chuyên nghiệp” và “Tận tâm” là hai từ mình xin dành cho cô Quỳnh và team AIT. Nhờ vậy, gia đình mình đã đi được nửa chặng đường tới Canada Dream. Cám ơn cô Quỳnh và team AIT nhiều.',
    },
    {
      name: 'Chị Huyền Anh, mẹ bạn Trần Hương Giang',
      role: 'Trung học - St. Michaels University School',
      imageUrl:
        'https://aitduhoc.com/wp-content/uploads/2022/02/Photo-chi%CC%A3-Huye%CC%82%CC%80n-Anh-1.jpg',
      bio: 'Cảm ơn Ms Hoà (VP AIT tại Hà nội) đã hỗ trợ em Giang và gia đình trong việc chuẩn bị các hồ sơ và giấy tờ cần thiết cho việc xin học bổng với trường, làm thủ tục du học, mặc dù các thủ tục vào Canada tương đối khắt khe nhưng sự hướng dẫn chu đáo về thủ tục đã làm mọi vấn đề trở nên đơn giản đúng tiến độ.',
    },
    {
      name: 'Lương Thùy Chung',
      role: 'Thạc sỹ - Đại học Montreal',
      imageUrl:
        'https://aitduhoc.com/wp-content/uploads/2022/02/eww4422323.jpg',
      bio: 'Em xin cảm ơn AIT đã hết lòng hỗ trợ để em có visa trong tình hình dịch bệnh rất khó khăn như này. Quy trình xử lý chuyên nghiệp, nhanh gọn, hỗ trợ đến mức tối đa từ việc làm hồ sơ visa, nhà cửa, đi lại, book vé máy bay đến những việc nhỏ nhất để hòa nhập cuộc sống bên Canada.',
    },
    {
      name: 'Đào Dương Minh',
      role: 'Cử nhân - Đại học Victoria',
      imageUrl:
        'https://aitduhoc.com/wp-content/uploads/2022/02/45345te%CC%80.jpg',
      bio: 'Mình muốn gửi lời cảm ơn tới AIT vì đã giúp đỡ mình rất tốt trong quá trình đăng kí vào UVic. Có rất nhiều giấy tờ phải khai báo và dịch thuật khi đăng kí vào một trường tại Canada, nhưng đội ngũ AIT rất hiểu biết và có kinh nghiệm nên quá trình nhập học vào UVic của mình đã diễn ra khá suôn sẻ.',
    },
    // More people...
  ]
  
  export default function Testimonials() {
    return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Cảm nhận của khách hàng</h2>
  
            <ul
              role="list"
              className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-color1">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  