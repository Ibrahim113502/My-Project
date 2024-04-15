function AboutClient() {
  return (
    <main className="flex justify-center relative bg-[#f8f8f9]">
      <section className="container lg:pt-24 lg:pb-24 p-5 lg:px-10 xl:px-0">
        <span className="orangeRound absolute bottom-0 right-0 h-[52vh]  w-[19vw]"></span>

        <div className="flex justify-start lg:pb-10 py-3">
          <div className="pl-3 lg:pl-0">
            <p className=" uppercase ">Clients we work for</p>
            <h1 className="lg:text-5xl text-3xl font-bold pt-4">Our clients.</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2  p-3 lg:p-0 ">
          <div className="grid gap-7 ">
            <div>
              <h3 className="font-bold">JPMorgan Chase, 2020</h3>
              <p>www.jpmorgan.com</p>
            </div>
            <div>
              <h3 className="font-bold">Berkshire Hathaway, 2020</h3>
              <p>www.bhathaway.com</p>
            </div>
            <div>
              <h3 className="font-bold">Royal Dutch Shell, 2018</h3>
              <p>www.shell.com</p>
            </div>
            <div>
              <h3 className="font-bold">Mastercard, 2018</h3>
              <p>www.mastercard.com</p>
            </div>
          </div>

          <div className="grid gap-7 ">
            <div>
              <h3 className="font-bold">HSBC Holdings, 2018</h3>
              <p>www.hsbc.com</p>
            </div>
            <div>
              <h3 className="font-bold">Anheuser-Busch InBev, 2018</h3>
              <p>www.anheuserbusch.com</p>
            </div>
            <div>
              <h3 className="font-bold">Procter & Gamble, 2017</h3>
              <p>www.pg.com</p>
            </div>
            <div>
              <h3 className="font-bold">Merck & Co., 2017</h3>
              <p>www.merck.com</p>
            </div>
          </div>

          <div className="grid gap-7 content-start">
            <div>
              <h3 className="font-bold">Unilever, 2017</h3>
              <p>www.uniliver.com</p>
            </div>
            <div>
              <h3 className="font-bold">L'Oréal Group, 2016</h3>
              <p>www.loreal.com</p>
            </div>
            <div>
              <h3 className="font-bold">Novo Nordisk, 2016</h3>
              <p>www.novonordisk.com</p>
            </div>
          </div>

          <div className="grid gap-7 content-start ">
            <div>
              <h3 className="font-bold">Naspers, 2016</h3>
              <p>www.naspers.com</p>
            </div>
            <div>
              <h3 className="font-bold">Allianz, 2016</h3>
              <p>www.allianz.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutClient;
