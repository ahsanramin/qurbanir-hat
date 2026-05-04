import Image from "next/image";
import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";
import Reveiw from "@/components/Reveiw";

export default async function Home() {
   
  return (
<div>
<Banner/>
<FeaturedAnimals/>
<QurbaniTips/>
<TopBreeds/>
<Reveiw/>
</div>
  );
}
