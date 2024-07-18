import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  classname?: string;
}

export function Title ({ title, subtitle, classname}: Props) {
  return (
    <div className={`mt-3 ${ classname }`}>
      <h1 className={`${ titleFont.className } antialiased text-4xl font-semibold my-8`}>
        { title }
      </h1>
      {
        subtitle && (
          <h3 className="text-xl mb-5">{ subtitle }</h3>
        )
      }
    </div>
  )
}