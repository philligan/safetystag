import styles from "./agenda.module.css";

const DayHeading = ({ day, date }: { day: number; date: string }) => (
  <h3 className={styles.agendaDayHeading}>
    <span className={styles.agendaHeading}>Day {day}</span>
    <span className={styles.agendaHeading}>{date}</span>
  </h3>
);

const DayList = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.agendaListWrapper}>
    <div role="list" className={styles.agendaList}>
      {children}
    </div>
  </div>
);

const AgendaEntry = ({
  children,
  time,
  heading,
}: {
  children?: React.ReactNode;
  time: string;
  heading: string;
}) => (
  <div role="listitem" className={styles.agendaItem}>
    <div className={styles.agendaBlock}>
      <h4 className={styles.agendaTime}>{time}</h4>
      <div className={styles.agendaDetail}>
        <h3 className={styles.agendaHeading}>{heading}</h3>
        {children && <div className={styles.agendaContent}>{children}</div>}
      </div>
    </div>
  </div>
);

const Agenda = () => {
  return (
    <div className={styles.agenda}>
      <div className={styles.agendaInner}>
        <DayHeading day={1} date="4th July" />
        <DayList>
          <AgendaEntry time="17:00" heading="Arrive in Amsterdam" />
          <AgendaEntry time="18:00" heading="Hotel Check-in">
            <p>
              We will be staying at{" "}
              <a
                href="https://www.inntelhotels.nl/amsterdamcentre"
                target="_blank"
                rel="nofollow"
              >
                Inntel Hotel Amsterdam Centre
              </a>
              .
            </p>
            <p>
              Let&apos;s meet up in the hotel lobby after our flights and check
              in together.
            </p>
          </AgendaEntry>
          <AgendaEntry time="19:00 - Late" heading="Food & Drinks">
            <p>
              We&apos;ll explore the local area for dinner and drinks—no fixed
              plans, just see where the night takes us!
            </p>
            <p>
              If you have any suggestions or places you want to check out, let
              the group know.
            </p>
          </AgendaEntry>
        </DayList>
        <DayHeading day={2} date="5th July" />
        <DayList>
          <AgendaEntry time="09:00" heading="Free Time">
            <p>
              You can explore the city, visit museums, or just relax. The hotel
              is located in the city centre, so you can easily walk to many
              attractions.
            </p>
            <p>
              Or, if you prefer, you can stay in bed and nurse your hangover. No
              judgement.
            </p>
            <p>
              Make sure to grab some lunch before we head out in the afternoon.
            </p>
          </AgendaEntry>
          <AgendaEntry time="14:00 - 15:30" heading="Lightning VR">
            <>
              <p>
                We have a VR gaming session booked at Lightning VR. Please aim
                to arrive at least 15 minutes early so we can get set up and
                start on time.
              </p>
              <p>
                If you wear glasses, take into account that glasses larger then
                142 x 50 mm will not fit the VR goggles. Wear contacts if
                possible.
              </p>
              <p>
                <strong>Location:</strong>{" "}
                <a
                  href="https://goo.gl/maps/1Z5b7c8d9kz"
                  target="_blank"
                  rel="nofollow"
                >
                  Lightning VR Amsterdam Noord
                </a>
              </p>
              <p>
                <strong>Distance from hotel:</strong> 30min walk & ferry
              </p>
              <p>
                <strong>Note</strong>: We need to cross the canal on a free
                ferry. Make sure to get the Buiksloterweg ferry from Centraal
                Station.
              </p>
            </>
          </AgendaEntry>
          <AgendaEntry time="17:30 - 19:00" heading="Private Canal Cruise">
            <p>
              Enjoy a 1.5-hour private canal cruise with an open bar as we take
              in Amsterdam&apos;s sights from the water.
            </p>
            <p>
              <strong>Location:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/mUwxnPFo9w7KW88R7"
                target="_blank"
                rel="nofollow"
              >
                The Starboard Dock - Canal Cruises
              </a>
            </p>
            <p>
              <strong>Distance from hotel:</strong> 22min walk
            </p>
          </AgendaEntry>
          <AgendaEntry time="19:30 - 21:30" heading="Dinner">
            <p>We have a reservation for dinner at the Hard Rock Cafe.</p>
            <p>
              <strong>Location:</strong>{" "}
              <a
                href="https://goo.gl/maps/1Z5b7c8d9kz"
                target="_blank"
                rel="nofollow"
              >
                Hard Rock Cafe Amsterdam
              </a>
            </p>
            <p>
              <strong>Distance from canal cruise:</strong> 20min walk
            </p>
          </AgendaEntry>
          <AgendaEntry time="21:30 - Late" heading="Drinks">
            <p>
              After dinner, we&apos;ll head to the lively Leidseplein area for
              drinks, with plenty of bars and clubs to choose from.
            </p>
          </AgendaEntry>
        </DayList>
        <DayHeading day={3} date="6th July" />
        <DayList>
          <AgendaEntry time="11:00" heading="Hotel Check-out" />
          <AgendaEntry time="14:00 - 15:30" heading="Heineken Experience">
            <p>
              The Heineken Experience is a 1.5-hour tour of Heineken&apos;s
              oldest brewery in Amsterdam.
            </p>
            <p>
              We finish with a visit to the exclusive rooftop terrace for city
              views and a beer.
            </p>
          </AgendaEntry>
          <AgendaEntry time="15:30" heading="Travel to Airport" />
        </DayList>
      </div>
    </div>
  );
};

export default Agenda;
