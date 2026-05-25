# Case Study: Openversum

I joined Openversum _(a Swiss social enterprise bringing clean water to rural Latin America)_ as **fullstack developer** although I endeup working as the solo **frontend developer and UX/UI designer**.

I inherited three unstable prototype apps with real users depending on them, and left behind two production-ready applications built from scratch: a redesigned entrepreneur app about to receive its first real users, and a functional admin platform.

Along the way I solved **three problems that most developers never face**: apps that need to work without internet, users who don't know what email is, and interfaces complex enough to manage inventory but simple enough for someone who's most technical knoledge is a basic usage of a smartphone.

---

## The Company

[Openversum](https://www.openversum.com) is a Swiss social enterprise with operations in Latin America. Their mission: make clean water technology affordable and accessible to communities that don't have it.

The way they do it is through a Village Entrepreneur Model. Openversum equips local community members _(entrepreneurs)_ with water filters to sell and a mobile app to manage their business: inventory orders, sales reporting, debt payments to Openversum. The app isn't a nice-to-have. It's the infrastructure that makes the whole model work.

## Initial Situation

---

I joined in July 2024 as a Full Stack Developer, but quickly settled into the role I was most needed in: frontend development and UX/UI design.

What I walked into was a common early-stage startup situation, but with unusually high stakes. The company had three apps **Entrepreneur, Admin, and eLearning** all built quickly as prototypes on Supabase and SvelteKit. The problem: they had real users depending on them. Especially the Entrepreneur app, where managers had started filling in the gaps manually, acting as tutors, tech support, and workarounds, because the app couldn't handle everything it needed to.

Simply shutting down the prototypes wasn't an option. People's livelihoods were attached to these tools.

My colleague and I assessed the situation and proposed a two-track strategy: maintain and stabilize the existing apps so they stopped causing active harm, while building the new versions in parallel on a proper architecture. We'd shift priority gradually from maintenance to new development as we got the fires under control.

By default of our strengths, I owned frontend and design. My colleague owned backend and DevOps.

For the new apps, I proposed Astro for the Entrepreneur app (lightweight, critical for low-connectivity environments) and Next.js for Admin (industry-standard ecosystem, better suited for complex interactivity). The eLearning app wasn't prioritized for a full rebuild.

## The Challenges:

### 1. The app needs to work without internet

---

**The problem.** Openversum's entrepreneurs live in rural areas across Colombia. Reliable internet isn't a given, it's often nonexistent. But the entire business model depends on the app being usable. If the app doesn't load, the entrepreneur can't place orders, report sales, or track inventory. The business stalls.

This wasn't a hypothetical edge case. It was the daily reality of the people we were building for.

<br />

**The solution.** I broke this into two parts.

- **First:** make the app a PWA (Progressive Web App). This means entrepreneurs can install it directly from their browser, no app store, no account needed, and access cached data even when offline.

- **Second:** design a data synchronization system. This was the harder part. When an entrepreneur makes changes offline, those changes need to eventually reach the cloud database without corrupting existing data or creating conflicts. We designed a request queue system: when connectivity returns, the app sends pending requests one by one. If one fails, the queue pauses and waits for user input before retrying, no silent data loss, no cascading errors. Conflicts and errors that couldn't be auto-resolved would get flagged for the assigned manager to handle.

The full sync system is significantly more complex than this summary. **we documented it in a detailed flow diagram** but the core design principle was conservative: prefer slower and safe over fast and risky.

### 2. The users aren't tech-savvy

---

**The problem.** The entrepreneurs using this app are often people with minimal exposure to smartphones or digital interfaces. That's not a criticism, it's a design constraint that completely changes how you think about UX.

The prototype we inherited had basic web forms: labels, inputs, submit buttons. Standard stuff. The problem is that "standard" assumed a baseline of digital literacy that many of our users didn't have. During a field trip to Cartagena in March 2025, where the team visited real entrepreneurs using the app , I saw this firsthand. One entrepreneur, Doña Marta, couldn't remember her email or password. The login process alone became a multi-minute frustration. When it came time to place an inventory order, the form layout paralyzed her. She didn't know where to start.

That trip recalibrated everything.

![Trip to Cartagena](../lib/images/field-trip.png)

<br />

**The solution.** I approached the redesign with one reference point: Nequi. It's one of the most widely used financial apps in Colombia, which means many of our users were already familiar with its patterns _(bottom navigation, large header with key info, quick-action shortcuts to the most common flows.)_ I borrowed that structure deliberately, not aesthetically. The goal was to reduce the cognitive distance between something they already knew and something new.

![Nequi inspiration](../lib/images/nequi-inspiration.png)

For flows that required a lot of information (like placing an inventory order) I broke the interface into single-screen steps. Instead of a form with ten fields, the user sees one question at a time, written in plain conversational language ("How many filters do you want to order?"), with a large input and Previous / Next navigation. One question. One answer. Move on.

Anything that wasn't strictly necessary for the entrepreneur to manage directly, we moved to the manager's responsibility.

And for authentication: we replaced email + password with phone number + WhatsApp OTP. No email account needed. No password to forget. The entrepreneur receives a code on WhatsApp (an app they already use daily) and logs in. Simple, familiar, reliable.

### 3. The prototypes had real users and couldn't just be replaced

---

**The problem.** This wasn't a greenfield project. The existing apps had real users, real dependencies, and real managers who had built workflows around their limitations. A hard cutover "the old app is gone, use the new one" was off the table.

The prototypes were also built with patterns that made them fragile: difficult to maintain, hard to extend, and with a frontend that was functional but not intuitive enough for the user base. Every change risked breaking something else.

<br />

**The solution.** The maintenance track came first. Before writing a single line of the new apps, my colleague and I triaged the most critical issues in the prototypes and fixed them in the least invasive way possible. The goal wasn't to refactor everything, it was to stop the bleeding.

On the Entrepreneur prototype specifically, I redesigned the interface enough to remove the most damaging usability problems, without making changes so large they'd introduce new bugs or delay the real work. It was a careful calibration: improve without destabilizing.

As the prototypes stabilized, we shifted priority to the new builds. The new Entrepreneur app was built on Astro, chosen specifically for its lightweight output, important when you're targeting users with slow or intermittent connections. The new Admin app was built on Next.js, which gave us a mature ecosystem and better tooling for the more complex, data-heavy workflows managers needed.

![Design Progress](../lib/images/design-progress.png)

## What I Left Behind at Openversum

---

When I wrapped up at Openversum, this is what existed:

**New Entrepreneur App** Built from scratch on Astro. PWA-enabled with offline support and a synchronized data queue. Redesigned UX based on Nequi's navigation patterns and step-by-step form flows. WhatsApp OTP authentication replacing email/password. Ready to receive its first real users.

**New Admin App** Built on Next.js. Core features implemented and functional. Backend fully operational (built by my colleague). Equipped for managers to handle inventory, user management, and conflict resolution from the sync system.

**Maintained Prototypes** Stabilized and kept running throughout the transition, so no real users were disrupted while the new versions were being built.

**Sync Architecture** Designed and documented: a queue-based offline-to-cloud synchronization system built for low-connectivity environments, with error handling and manager-level conflict resolution.

---

By John Gutierrez.
