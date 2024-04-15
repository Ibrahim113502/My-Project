function MapComponent() {
  return (
    <main className="">
      <section className="">
        <div className="w-full h-[50vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4012924.123838464!2d78.28976490000001!3d10.821166349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694425965648!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default MapComponent;
