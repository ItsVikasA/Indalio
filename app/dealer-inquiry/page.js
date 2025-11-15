import Breadcrumb from "@/components/Breadcrumb";
import DealerInquiryForm from "@/components/DealerInquiryForm";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Dealer / Distributor Partnership" />
      <DealerInquiryForm />
    </NextLayout>
  );
};

export default page;
