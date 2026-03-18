import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  CONTACT_ADDRESS,
  CONTACT_PHONE,
  CONTACT_EMAIL,
} from "@/lib/constants";

const HEADQUARTERS_LAT = 30.456;
const HEADQUARTERS_LON = 114.4253;
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${HEADQUARTERS_LON - 0.01}%2C${HEADQUARTERS_LAT - 0.006}%2C${HEADQUARTERS_LON + 0.01}%2C${HEADQUARTERS_LAT + 0.006}&layer=mapnik&marker=${HEADQUARTERS_LAT}%2C${HEADQUARTERS_LON}`;

const items = [
  {
    icon: MapPin,
    label: "公司地址",
    value: CONTACT_ADDRESS,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Phone,
    label: "联系电话",
    value: CONTACT_PHONE,
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Mail,
    label: "电子邮箱",
    value: CONTACT_EMAIL,
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: Clock,
    label: "工作时间",
    value: "周一至周五 09:00 - 18:00",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white border border-gray-100 p-6 lg:p-8">
        <h3 className="text-xl font-bold text-gray-900">联系方式</h3>
        <p className="mt-1 text-sm text-gray-500">
          欢迎通过以下方式与我们取得联系
        </p>

        <div className="mt-6 space-y-5">
          {items.map(({ icon: Icon, label, value, gradient }) => (
            <div key={label} className="flex items-start gap-4">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}
              >
                <Icon size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {label}
                </div>
                <div className="mt-0.5 text-sm text-gray-500">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100">
        <iframe
          title="元宇宙科技 联系地址地图"
          src={MAP_SRC}
          className="aspect-[4/3] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
