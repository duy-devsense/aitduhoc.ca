/* This example requires Tailwind CSS v2.0+ */
import { LightningBoltIcon, CurrencyDollarIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Dịch vụ nhanh chóng',
        description:
        'AIT giúp giải thích, hướng dẫn các bước nộp hồ sơ xin nhập học và theo dõi, liên hệ trực tiếp để thúc đẩy các trường có kết quả sớm nhất.',
        icon: LightningBoltIcon,
    },
    {
      name: 'Tư vấn miễn phí',
      description: 'Tư vấn, hướng dẫn thi thử, làm bài kiểm tra đầu vào, tư vấn chương trình và trường học phù hợp cho tiềm năng học tập, thị trường lao động và ngân sách.',
      icon: CurrencyDollarIcon,
    },
  {
    name: 'Chính phủ Canada chứng nhận',
    description:
      'Cô Vũ Như Quỳnh, cổ đông sáng lập AIT, được chính phủ Canada chứng nhận và trao danh hiệu Chuyên gia Tư vấn Di Trú Canada.',
    icon: ShieldCheckIcon,
  },
  {
    name: '300 Trường đại diện',
    description:
      'AIT là đại diện cho 300 trường trung học, cao đẳng, đại học và các trung tâm giáo dục ngôn ngữ tại Canada, Mỹ, Anh và các nước khác.',
    icon: UserGroupIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Chất lượng tư vấn du học hàng đầu Việt Nam
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-color1 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
