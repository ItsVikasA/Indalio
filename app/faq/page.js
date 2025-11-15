import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Frequently Asked Questions" />
      <Faq />
    </NextLayout>
  );
};

export default page;
