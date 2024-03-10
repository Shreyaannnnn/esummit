import "./styles/landing.css";
import "./styles/general.css";
import "./styles/NavBar.css";
import "./styles/Card.css";
import "./styles/AboutUs.css";
import "./styles/FAQ.css";
import "./styles/vision.css";
import "./styles/mediaQueries.css";
import "./styles/timeline.css";
import "./styles/time.css";
import "./styles/footer.css";

import { timerValue, endTime } from "./data/timer.js";

import { faqs } from "./data/faq.js";
import navLogo from "./assets/Logo.png";
import hhhh from "./assets/about.jpg";
import landingImage from "./assets/background-landing.jpg";

import landingLogo from "./assets/landingLogo.png";
import { useEffect, useState } from "react";

function NFTRush() {
  return (
    <>
      <NavBar />
      <Landing />
      <EventTimer />
      <AboutEvent />
      <VisionAndMission />
      <StackCards />
      <FAQ />
      <Footer />
    </>
  );
}

function Landing() {
  return (
    <div className="landing-container">
      <div className="image-container">
        <img className="landing-image" src={landingImage} alt="" />
      </div>

      <div className="landing-content">
        <div className="dates">
          13th to 15th March{" "}
          <span
            style={{
              color: "rgb(187, 224, 23)",
              fontSize: "70px",
              margin: "0px 10px",
            }}
          >
            &middot;
          </span>{" "}
          2024
        </div>
        <div className="logo-container">
          <img src={landingLogo} alt="landing-logo" />
        </div>
        <div className="info">
          The flagship event of the Entrepreneurship Cell, ADGIPS promoting
          entrepreneurship.
        </div>
        <div className="button-container">
          <RegisterButton />
          <button className="tickets-button">Tickets</button>
        </div>
      </div>

      <a>
        <div
          className="move-down"
          onClick={() => {
            const about = document.querySelector(".about");
            about.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}

function NavBar() {
  useEffect(function () {
    function headerOpacity() {
      window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".nav-color-fill");
        header.style.opacity = 1 - (128 - this.scrollY) / header.clientHeight;
      });
    }
    headerOpacity();
  });

  return (
    <nav>
      <div className="nav-color-fill"></div>

      <div className="logo">
        <img src={navLogo} alt="nav-logo" />
      </div>

      <ul className="nav-menu">
        <li className="active">Home</li>
        <li>Speakers</li>
        <li>Partners</li>
        <li>Event</li>
        <li>Tickets</li>
        <li>FAQ</li>
      </ul>
      <div className="nav-button-container">
        <RegisterButton />
      </div>
    </nav>
  );
}

function RegisterButton() {
  return <button className="register-button">Register</button>;
}

function AboutEvent() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h1 className="sectionHeading">About the event</h1>

        <div className="card-container">
          <Card backgroundPosition="top left">
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              repellendus nihil tempora dolorem hic perferendis soluta! Ea,
              distinctio dignissimos doloremque aut nostrum perferendis quo,
            </p>
          </Card>
          <Card backgroundPosition="center right">
            <h3>Motto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              repellendus nihil tempora dolorem hic perferendis soluta! Ea,
              distinctio dignissimos doloremque aut nostrum perferendis quo,
            </p>
          </Card>
          <Card backgroundPosition="bottom center">
            <h3>Guidelines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              repellendus nihil tempora dolorem hic perferendis soluta! Ea,
              distinctio dignissimos doloremque aut nostrum perferendis quo, ut
              eos, deleniti incidunt repellendus ratione corporis minima in
              itaque quia pariatur vel temporibus nihil blanditiis.
            </p>
          </Card>
          <Card backgroundPosition="bottom center">
            <h3>Guidelines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              repellendus nihil tempora dolorem hic perferendis soluta! Ea,
              distinctio dignissimos doloremque aut nostrum perferendis quo, ut
              eos, 
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ children, backgroundPosition }) {
  return (
    <div className="card" style={{ backgroundPosition: backgroundPosition }}>
      <div className="card-image-container">
        <img className="card-image" src={hhhh} alt="info" />
      </div>
      {children}
    </div>
  );
}

function VisionAndMission() {
  return (
    <section className="visionAndMission">
      <div className="left-section">
        <h3>
          <span>Vision</span> <span>And</span> <span>Mission</span>
        </h3>
      </div>

      <div className="right-section">
        <div className="container">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            vero iure, minus explicabo veniam beatae ad quam ut, maiores rem id
            perferendis doloribus tempora fuga voluptatum necessitatibus facere
            quas 
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <div className="faq-container">
      <h1 className="sectionHeading">Frequently asked questions.</h1>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [id, setId] = useState(null);
  const [isExpand, setIsExpand] = useState(false);
  function handleExpand() {
    setIsExpand(!isExpand);
  }
  return (
    <div className="accordion">
      {faqs.map((ele, i) => (
        <Element
          title={ele.title}
          handleClick={setId}
          handleExpand={handleExpand}
          key={i}
          index={i}
          id={id}
        >
          {ele.text}
        </Element>
      ))}
    </div>
  );
}

function Element({ title, index, handleClick, id, handleExpand, children }) {
  return (
    <div
      className={`item ${index === id ? "open" : ""}`}
      onClick={() => {
        if (id === index) {
          handleExpand();
          handleClick(null);
          return;
        }
        handleClick(index);
      }}
    >
      <p
        className="title"
        style={index === id ? { color: "var(--primary-color)" } : {}}
      >
        {title}
      </p>
      <span className="icon">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={
            index === id
              ? { transform: "rotate(45deg)" }
              : { transform: "rotate(0deg)" }
          }
        >
          <path
            d="M12.7358 5.20044V19.2004"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.73584 12.2004H19.7358"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {/* {index === id && <div className="content-box">{children}</div>} */}
      <div
        className="content-box"
        style={
          index === id
            ? { maxHeight: "200px", transition: "max-height 0.5s" }
            : { maxHeight: "0px", transition: "max-height 0.4s" }
        }
      >
        <p style={index === id ? { opacity: 1 } : { opacity: 0 }}>{children}</p>
      </div>
    </div>
  );
}

const StackCards = () => {
  const [items, setItems] = useState([
    {
      number: 1,
      rule: "hello",
    },
    {
      number: 2,
      rule: "hello",
    },
    {
      number: 3,
      rule: "hello",
    },
    {
      number: 4,
      rule: "hello",
    },
    {
      number: 5,
      rule: "hello",
    },
  ]);

  useEffect(() => {
    function Util() {}
    Util.hasClass = function (el, className) {
      if (el.classList) return el.classList.contains(className);
      else
        return !!el.className.match(
          new RegExp("(\\s|^)" + className + "(\\s|$)")
        );
    };
    Util.addClass = function (el, className) {
      var classList = className.split(" ");
      if (el.classList) el.classList.add(classList[0]);
      else if (!Util.hasClass(el, classList[0]))
        el.className += " " + classList[0];
      if (classList.length > 1) Util.addClass(el, classList.slice(1).join(" "));
    };
    Util.removeClass = function (el, className) {
      var classList = className.split(" ");
      if (el.classList) el.classList.remove(classList[0]);
      else if (Util.hasClass(el, classList[0])) {
        var reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
      }
      if (classList.length > 1)
        Util.removeClass(el, classList.slice(1).join(" "));
    };
    Util.toggleClass = function (el, className, bool) {
      if (bool) Util.addClass(el, className);
      else Util.removeClass(el, className);
    };
    Util.setAttributes = function (el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    };
    Util.getChildrenByClassName = function (el, className) {
      var children = el.children,
        childrenByClass = [];
      for (var i = 0; i < el.children.length; i++) {
        if (Util.hasClass(el.children[i], className))
          childrenByClass.push(el.children[i]);
      }
      return childrenByClass;
    };
    Util.is = function (elem, selector) {
      if (selector.nodeType) {
        return elem === selector;
      }
      var qa =
          typeof selector === "string"
            ? document.querySelectorAll(selector)
            : selector,
        length = qa.length,
        returnArr = [];
      while (length--) {
        if (qa[length] === elem) {
          return true;
        }
      }
      return false;
    };
    Util.setHeight = function (start, to, element, duration, cb) {
      var change = to - start,
        currentTime = null;
      var animateHeight = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        var val = parseInt((progress / duration) * change + start);
        element.style.height = val + "px";
        if (progress < duration) {
          window.requestAnimationFrame(animateHeight);
        } else {
          cb();
        }
      };
      element.style.height = start + "px";
      window.requestAnimationFrame(animateHeight);
    };
    Util.scrollTo = function (final, duration, cb, scrollEl) {
      var element = scrollEl || window;
      var start = element.scrollTop || document.documentElement.scrollTop,
        currentTime = null;
      if (!scrollEl)
        start = window.scrollY || document.documentElement.scrollTop;
      var animateScroll = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        if (progress > duration) progress = duration;
        var val = Math.easeInOutQuad(progress, start, final - start, duration);
        element.scrollTo(0, val);
        if (progress < duration) {
          window.requestAnimationFrame(animateScroll);
        } else {
          cb && cb();
        }
      };
      window.requestAnimationFrame(animateScroll);
    };
    Util.moveFocus = function (element) {
      if (!element) element = document.getElementsByTagName("body")[0];
      element.focus();
      if (document.activeElement !== element) {
        element.setAttribute("tabindex", "-1");
        element.focus();
      }
    };
    Util.getIndexInArray = function (array, el) {
      return Array.prototype.indexOf.call(array, el);
    };
    Util.cssSupports = function (property, value) {
      if ("CSS" in window) {
        return CSS.supports(property, value);
      } else {
        var jsProperty = property.replace(/-([a-z])/g, function (g) {
          return g[1].toUpperCase();
        });
        return jsProperty in document.body.style;
      }
    };
    Util.extend = function () {
      var extended = {};
      var deep = false;
      var i = 0;
      var length = arguments.length;
      if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
        deep = arguments[0];
        i++;
      }
      var merge = function (obj) {
        for (var prop in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            if (
              deep &&
              Object.prototype.toString.call(obj[prop]) === "[object Object]"
            ) {
              extended[prop] = extended(true, extended[prop], obj[prop]);
            } else {
              extended[prop] = obj[prop];
            }
          }
        }
      };
      for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
      }
      return extended;
    };
    Util.osHasReducedMotion = function () {
      if (!window.matchMedia) return false;
      var matchMediaObj = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (matchMediaObj) return matchMediaObj.matches;
      return false;
    };
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
          if (el.matches(s)) return el;
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
      };
    }
    if (typeof window.CustomEvent !== "function") {
      // eslint-disable-next-line no-inner-declarations
      function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: undefined,
        };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(
          event,
          params.bubbles,
          params.cancelable,
          params.detail
        );
        return evt;
      }
      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = CustomEvent;
    }
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    (function () {
      var focusTab = document.getElementsByClassName("js-tab-focus");
      function detectClick() {
        if (focusTab.length > 0) {
          resetFocusTabs(false);
          window.addEventListener("keydown", detectTab);
        }
        window.removeEventListener("mousedown", detectClick);
      }
      function detectTab(event) {
        if (event.keyCode !== 9) return;
        resetFocusTabs(true);
        window.removeEventListener("keydown", detectTab);
        window.addEventListener("mousedown", detectClick);
      }
      function resetFocusTabs(bool) {
        var outlineStyle = bool ? "" : "none";
        for (var i = 0; i < focusTab.length; i++) {
          focusTab[i].style.setProperty("outline", outlineStyle);
        }
      }
      window.addEventListener("mousedown", detectClick);
    })();
    (function () {
      var StackCards = function (element) {
        this.element = element;
        this.items = this.element.getElementsByClassName(
          "js-stack-cards__item"
        );
        this.scrollingFn = false;
        this.scrolling = false;
        initStackCardsEffect(this);
        initStackCardsResize(this);
      };
      function initStackCardsEffect(element) {
        setStackCards(element);
        var observer = new IntersectionObserver(
          stackCardsCallback.bind(element),
          {
            root: document.querySelector(".rules"),
            threshold: [0, 1],
            rootMargin: `100px`,
          }
        );
        observer.observe(element.element);
      }
      function initStackCardsResize(element) {
        element.element.addEventListener("resize-stack-cards", function () {
          setStackCards(element);
          animateStackCards.bind(element);
        });
      }
      function stackCardsCallback(entries) {
        if (entries[0].isIntersecting) {
          if (this.scrollingFn) return;
          stackCardsInitEvent(this);
        } else {
          if (!this.scrollingFn) return;
          window.removeEventListener("scroll", this.scrollingFn);
          this.scrollingFn = false;
        }
      }
      function stackCardsInitEvent(element) {
        element.scrollingFn = stackCardsScrolling.bind(element);
        window.addEventListener("scroll", element.scrollingFn);
      }
      function stackCardsScrolling() {
        if (this.scrolling) return;
        this.scrolling = true;
        window.requestAnimationFrame(animateStackCards.bind(this));
      }
      function setStackCards(element) {
        element.marginY = getComputedStyle(element.element).getPropertyValue(
          "--stack-cards-gap"
        );
        getIntegerFromProperty(element);
        element.elementHeight = element.element.offsetHeight;
        var cardStyle = getComputedStyle(element.items[0]);
        element.cardTop = Math.floor(
          parseFloat(cardStyle.getPropertyValue("top"))
        );
        element.cardHeight = Math.floor(
          parseFloat(cardStyle.getPropertyValue("height"))
        );
        element.windowHeight = window.innerHeight;
        if (isNaN(element.marginY)) {
          element.element.style.paddingBottom = "0px";
        } else {
          element.element.style.paddingBottom =
            element.marginY * (element.items.length - 1) + "px";
        }
        for (var i = 0; i < element.items.length; i++) {
          if (isNaN(element.marginY)) {
            element.items[i].style.transform = "none;";
          } else {
            element.items[i].style.transform =
              "translateY(" + element.marginY * i + "px)";
          }
        }
      }
      function getIntegerFromProperty(element) {
        var node = document.createElement("div");
        node.setAttribute(
          "style",
          "opacity:0; visbility: hidden;position: absolute; height:" +
            element.marginY
        );
        element.element.appendChild(node);
        element.marginY = parseInt(
          getComputedStyle(node).getPropertyValue("height")
        );
        element.element.removeChild(node);
      }
      function animateStackCards() {
        if (isNaN(this.marginY)) {
          this.scrolling = false;
          return;
        }
        var top = this.element.getBoundingClientRect().top;
        if (
          this.cardTop -
            top +
            this.element.windowHeight -
            this.elementHeight -
            this.cardHeight +
            this.marginY +
            this.marginY * this.items.length >
          0
        ) {
          this.scrolling = false;
          return;
        }
        for (var i = 0; i < this.items.length; i++) {
          var scrolling =
            this.cardTop - top - i * (this.cardHeight + this.marginY);
          if (scrolling > 0) {
            var scaling =
              i == this.items.length - 1
                ? 1
                : (this.cardHeight - scrolling * 0.05) / this.cardHeight;
            this.items[i].style.transform =
              "translateY(" + this.marginY * i + "px) scale(" + scaling + ")";
          } else {
            this.items[i].style.transform =
              "translateY(" + this.marginY * i + "px)";
          }
        }
        this.scrolling = false;
      }
      var stackCards = document.getElementsByClassName("js-stack-cards"),
        intersectionObserverSupported =
          "IntersectionObserver" in window &&
          "IntersectionObserverEntry" in window &&
          "intersectionRatio" in window.IntersectionObserverEntry.prototype,
        reducedMotion = Util.osHasReducedMotion();
      if (
        stackCards.length > 0 &&
        intersectionObserverSupported &&
        !reducedMotion
      ) {
        var stackCardsArray = [];
        for (var i = 0; i < stackCards.length; i++) {
          (function (i) {
            stackCardsArray.push(new StackCards(stackCards[i]));
          })(i);
        }
        var resizingId = false,
          customEvent = new CustomEvent("resize-stack-cards");
        window.addEventListener("resize", function () {
          clearTimeout(resizingId);
          resizingId = setTimeout(doneResizing, 500);
        });
        // eslint-disable-next-line no-inner-declarations
        function doneResizing() {
          for (var i = 0; i < stackCardsArray.length; i++) {
            (function (i) {
              stackCardsArray[i].element.dispatchEvent(customEvent);
            })(i);
          }
        }
      }
    })();
  }, [items]);
  return (
    <div className="rules">
      <h3>Rules to be followed.</h3>

      <ul className="stack-cards js-stack-cards">
        {items.map((item, index) => (
          <>
            <li key={index} className="stack-cards__item js-stack-cards__item">
              {/* {item} */}
              <div className="stack-content-container">
                <div className="rule-number">
                  <span>{item.number}</span>
                </div>
                <div className="rule">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid placeat quos, sequi animi, nesciunt sapiente,
                  voluptatibus voluptates fuga corrupti doloremque vero iste
                  repudiandae. Adipisci voluptatum, consequuntur ad, excepturi
                  molestiae id quis ab deserunt corporis iusto, necessitatibus
                  cupiditate odio quia ducimus.
                  {/* {item.rule} */}
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

function TimerHand({ hand, value }) {
  const time = String(value);
  return (
    <div
      className="timer"
      style={{
        height: "6rem",
        padding: "20px",
        display: "flex",
        flexDirection: "column ",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "1px 10px 20px rgba(0, 0, 0, 0.2)",
        color: "white",
        width: "10px",
      }}
    >
      <p style={{ fontSize: "45px" }}>{time.padStart(2, "0")}</p>
      <p>{hand}</p>
    </div>
  );
}

// function EventTimer() {
//   //target time
//   const targetDate = new Date(timerValue).getTime();
//   const endDate = new Date(endTime).getTime();

//   const calculateTimeRemaining = () => {
//     const now = new Date().getTime();
//     const startTimer = targetDate - now;
//     const endTimer = endDate - now;

//     if (startTimer > 0 && endTimer > 0) {
//       const days = Math.floor(startTimer / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (startTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((startTimer % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((startTimer % (1000 * 60)) / 1000);
//       return { days, hours, minutes, seconds, stage: 1 };
//     } else if (endTimer > 0 && startTimer < 0) {
//       return { stage: 2 };
//     } else {
//       return false;
//     }
//   };

//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining());
//     }, 1000);

//     return () => clearInterval(timerInterval);
//   });

//   return (
//     <div className="time-section">
//       <h1 className="timeHeading">
//         {timeRemaining.stage === 1
//           ? "Event will be live in : "
//           : timeRemaining.stage === 2
//           ? "Event is live right now."
//           : "Event has ended. "}
//       </h1>

//       <div className="timerContainer">
//         {timeRemaining.stage === 1 ? (
//           <>
//             <TimerHand value={timeRemaining.days} hand={"Days"} />
//             <TimerHand value={timeRemaining.hours} hand={"Hours"} />
//             <TimerHand value={timeRemaining.minutes} hand={"Minutes"} />
//             <TimerHand value={timeRemaining.seconds} hand={"Seconds"} />
//           </>
//         ) : timeRemaining.stage === 2 ? (
//           <div style={{ color: "white" }}></div>
//         ) : (
//           <div style={{ color: "white" }}></div>
//         )}
//       </div>
//     </div>
//   );
// }

function EventTimer() {
  //target time
  const targetDate = new Date(timerValue).getTime();
  const endDate = new Date(endTime).getTime();

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const startTimer = targetDate - now;
    const endTimer = endDate - now;

    if (startTimer > 0 && endTimer > 0) {
      const days = Math.floor(startTimer / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (startTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((startTimer % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((startTimer % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds, stage: 1 };
    } else if (startTimer < 0 && endTimer > 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, stage: 2 };
    } else {
      return false;
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  });

  return (
    <div className="time-section" style={{ position: "relative" }}>
      <h1 className="timeHeading">
        {timeRemaining.stage === 1
          ? "Event Will be live in : "
          : timeRemaining.stage === 2
          ? "Event is live right now."
          : "Event has Ended"}
      </h1>

      <p className="remaining">Remaining</p>

      <div className="timerContainer">
        {timeRemaining ? (
          <>
            <TimerHand value={timeRemaining.days} hand={"Days"} />
            <TimerHand value={timeRemaining.hours} hand={"Hours"} />
            <TimerHand value={timeRemaining.minutes} hand={"Minutes"} />
            <TimerHand value={timeRemaining.seconds} hand={"Seconds"} />
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="main-footer">
      <div className="contact">Contact Us</div>
      <div className="logo">
        <div id="collageName">
          <p>ADGIPS</p>
        </div>
        <div id="ecell">ecell</div>
      </div>
      <div className="footer-row1">
        <div className="footer-links1">
          <div>
            <a href="https://maps.app.goo.gl/rhU64Hy6BMJbDrVn7">
              <div>
                FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park
                ,Shahdara,New Delhi, Delhi 110053
              </div>
            </a>
            <div className="contacts">
              <div>Email: </div>
              <div>ecelladgitm@gmail.com</div>
              <div>Phone: </div>
              <div> +91 82870 40010</div>
            </div>
          </div>
        </div>
      </div>

      <div className="last-section">
        <div className="social">
          <a href="https://www.instagram.com/ecelladgips/">
            <div className="icon">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="white"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>

          <a href="https://www.linkedin.com/company/ecell-adgitm/">
            <div className="icon">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="white"
                />
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="white"
                />
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="copy">
          <p className="right">E-Summit 2024 ADGIPS.All right reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default NFTRush;
