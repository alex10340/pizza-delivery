import Image from "next/image";

export default function LocationsPage() {
  return (
    <div className="max-w-[1000px] mx-auto p-6 my-6">
      <h1 className="underline decoration-primary underline-offset-8 decoration-dashed text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Our Locations
      </h1>
      <h2 className="text-center mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Find a Pizza Place Near You!
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-12">
        We're committed to serving you hot, fresh, and delicious pizzas at
        multiple locations across the city. Whether you're craving a quick bite
        or planning a family feast, our pizza joints are just around the corner.
        Check out the list of our locations below to find the one nearest to
        you. You can also order online and enjoy our speedy delivery right to
        your doorstep!
      </p>
      <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Downtown Pizza Hub
      </h2>
      <div className="flex items-center justify-between flex-wrap">
        <div className="relative w-96 h-96">
          <Image
            src={"/locations/downtown.webp"}
            fill
            alt="pizza place"
            className="object-cover object-top rounded-2xl border-4 border-primary"
          ></Image>
        </div>
        <ul className="w-[460px] lg:text-lg my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="font-bold">Address:</span> 123 Main Street,
            Downtown, Los Angeles, CA 90015
          </li>
          <li>
            <span className="font-bold">Phone:</span> (213) 456-7890
          </li>
          <li>
            <span className="font-bold">Hours:</span>
          </li>
          <ul>
            <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: 12:00 PM - 9:00 PM</li>
          </ul>
        </ul>
      </div>

      <p className="mt-6 border-l-2 pl-6">
        Located in the heart of Los Angeles, our Downtown Pizza Hub is the
        perfect spot for a quick lunch or an evening hangout. With cozy indoor
        seating and a lively atmosphere, it's a great place to enjoy your
        favorite slice. Don't forget to try our special lunch deals available on
        weekdays!
      </p>

      <h2 className="my-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Uptown Pizza Spot
      </h2>
      <div className="flex items-center justify-between flex-wrap">
        <div className="relative w-96 h-96">
          <Image
            src={"/locations/uptown.webp"}
            fill
            alt="pizza place"
            className="object-cover object-top rounded-2xl border-4 border-primary"
          ></Image>
        </div>
        <ul className="w-[460px] lg:text-lg my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="font-bold">Address:</span> 456 Elm Street, Uptown,
            New York, NY 10024
          </li>
          <li>
            <span className="font-bold">Phone:</span> (212) 987-6543
          </li>
          <li>
            <span className="font-bold">Hours:</span>
          </li>
          <ul>
            <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: 12:00 PM - 9:00 PM</li>
          </ul>
        </ul>
      </div>
      <p className="mt-6 border-l-2 pl-6">
        Our Uptown Pizza Spot is known for its family-friendly environment and
        exceptional service. Whether you're dining in or picking up, we
        guarantee a memorable experience with every visit. Check out our kids'
        menu and weekend specials!
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Midtown Pizza Plaza
      </h2>
      <div className="flex items-center justify-between flex-wrap">
        <ul className="w-[460px] lg:text-lg my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="font-bold">Address:</span> 789 Maple Avenue,
            Midtown, Chicago, IL 60611
          </li>
          <li>
            <span className="font-bold">Phone:</span> (312) 555-1234
          </li>
          <li>
            <span className="font-bold">Hours:</span>
          </li>
          <ul>
            <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: 12:00 PM - 9:00 PM</li>
          </ul>
        </ul>
      </div>
      <p className="mt-6 border-l-2 pl-6">
        Situated in the bustling Midtown area of Chicago, our Pizza Plaza offers
        a modern dining space with quick service. Perfect for grabbing a slice
        on the go or enjoying a relaxed meal with friends. Don't miss our happy
        hour deals from 4:00 PM to 6:00 PM, Monday through Friday!
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Suburbia Pizza Shack
      </h2>
      <div className="flex items-center justify-between flex-wrap">
        <ul className="w-[460px] lg:text-lg my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="font-bold">Address:</span> 1010 Oak Lane, Suburbia,
            Austin, TX 78745
          </li>
          <li>
            <span className="font-bold">Phone:</span> (512) 444-5678
          </li>
          <li>
            <span className="font-bold">Hours:</span>
          </li>
          <ul>
            <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: 12:00 PM - 9:00 PM</li>
          </ul>
        </ul>
      </div>
      <p className="mt-6 border-l-2 pl-6">
        Tucked away in the peaceful suburbs of Austin, our Pizza Shack offers a
        laid-back environment perfect for families and large groups. Enjoy our
        outdoor seating area during the warmer months and indulge in our
        signature wood-fired pizzas. We also offer catering services for parties
        and events!
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Old Town Pizza Corner
      </h2>
      <div className="flex items-center justify-between flex-wrap">
        <ul className="w-[460px] lg:text-lg my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="font-bold">Address:</span> 2020 Birch Road, Old
            Town, Alexandria, VA 22314
          </li>
          <li>
            <span className="font-bold">Phone:</span> (703) 666-7890
          </li>
          <li>
            <span className="font-bold">Hours:</span>
          </li>
          <ul>
            <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: 12:00 PM - 9:00 PM</li>
          </ul>
        </ul>
      </div>
      <p className="mt-6 border-l-2 pl-6">
        Located in the historic Old Town district of Alexandria, our Pizza
        Corner brings a touch of tradition with its classic recipes and rustic
        décor. Perfect for a cozy date night or a nostalgic meal with family. Be
        sure to ask about our weekly chef's special that's exclusive to this
        location!
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Coming Soon!
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We're constantly expanding to bring our delicious pizzas closer to you!
        Stay tuned for new locations opening soon in San Francisco, CA and
        Miami, FL. Follow us on social media for the latest updates and grand
        opening specials.
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Contact Us
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If you have any questions or need assistance finding a location, please
        contact our customer support at (888) 789-1011 or email us at
        support@pizzadelivery.com.
      </p>
    </div>
  );
}
