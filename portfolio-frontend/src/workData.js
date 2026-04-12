export const projects = [
  {
    header: "CAPSTONE PROJECT",
    title: "CaterXperience",
    bg: "bg-[#0b1722]",
    cardBg: "bg-[#0f1f2e]",
    subtitle: "CATERING OPERATIONS AND 2D VENUE LAYOUT PLANNING PLATFORM",
    desc: `
CaterXperience is a full-stack catering management system designed to streamline event
booking, operational workflows, and venue layout planning for catering businesses.
            
The platform provides role-based dashboards for staff, booking management tools, and an
interactive drag-and-drop venue layout editor that allows event planners to visualize
seating arrangements and stage setups before the event.`,
    tech: "REACT | LARAVEL | MYSQL | KONVA.JS",
    features: `
• Role-based dashboards for different staff members
• Event booking and client management system
• Staff task assignment and workflow tracking
• Inventory and catering package management
• Interactive 2D venue layout planner with drag-and-drop elements`,
projectScreenshots: [
        { 
            img: "src/assets/cater_ui/landing.jpg", 
            title: "CaterXperience", subtitle: "CAPSTONE PROJECT", 
            tech: "REACT | LARAVEL | MYSQL", 
            desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs." },
        { 
            img: "src/assets/cater_ui/dashboard.jpg", 
            tech: "DASHBOARD", 
            desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management." },
        { 
            img: "src/assets/cater_ui/bookings.jpg", 
            tech: "BOOKINGS", 
            desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly." },
        { 
            img: "src/assets/cater_ui/event.jpg", 
            tech: "EVENT DETAILS", 
            desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans." },
        { 
            img: "src/assets/cater_ui/menu.jpg", 
            tech: "MENU", 
            desc: "The menu section lets users view and manage food options, including their categorie and pictures."
        },
        { 
            img: "src/assets/cater_ui/packages.jpg", 
            tech: "PACKAGES", 
            desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons."
        },
        { 
            img: "src/assets/cater_ui/client.jpg", 
            tech: "CLIENT MANAGEMENT", 
            desc: "The client management interface keeps track of customer profiles, contact information, and booking history."
        },
        { 
            img: "src/assets/cater_ui/staff.jpg", 
            tech: "STAFF MANAGEMENT", 
            desc: "This page shows the staff roster, their roles, and schedules, making team management more organized."
        },
        { 
            img: "src/assets/cater_ui/layout.jpg", 
            tech: "2D VENUE LAYOUT", 
            desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually."
        },
        { 
            img: "src/assets/cater_ui/audit.jpg", 
            tech: "AUDIT LOG", 
            desc: "The audit log records system activity and changes, helping maintain accountability and track actions."
        },
    ]
  },
  {
    header: "INTERNSHIP INTERNAL PROJECT",
    title: "Database Conflict Identifier",
    bg: "bg-[#0f1f2e]",
    cardBg: "bg-[#0b1722]",
    subtitle: "DATABASE COMPARISON AND CONFLICT DETECTION TOOL",
    desc: `
DCI is a web application designed to analyze and compare two database sources to
identify conflicts, inconsistencies, and mismatched records. The tool helps organizations
maintain accurate datasets by highlighting conflicting entries and providing options to
resolve them.

The system simplifies database auditing by presenting comparison results through an
organized interface that allows users to review differences and manage ignored records.`,
    tech: "REACT | LARAVEL | MYSQL | POSTGRESQL",
    features: `
• Database comparison between multiple data sources
• Automated detection of conflicting records
• Filtering and reviewing detected conflicts
• Ignore and restore conflict management system
• Interactive table interface for reviewing differences`,
    projectScreenshots: [
        { 
            img: "src/assets/dci_ui/login.jpg", 
            title: "DCI", 
            subtitle: "INTERNSHIP PROJECT", 
            tech: "REACT | LARAVEL | MYSQL | POSTGRESQL", 
            desc: "Database Conflict Identifier is a web app internal project my team and I developed during our internship. Its purpose is to identify database schema conflicts, a tool needed by the company we were interning at."
        },
        { 
            img: "src/assets/dci_ui/home.jpg", 
            tech: "MAIN PAGE", 
            desc: "This page lets the user view the schemas after selecting a database.  The database connection may also be changed dynamically if there are multiple servers to get database from."
        },
        { 
            img: "src/assets/dci_ui/conflicts_viewer.jpg", 
            tech: "CONFLICTS AND SCHEMA VIEWER", 
            desc: "The conflicts and schema viewer allows the users to view the conflicts that were determined during the scanning of the two compared databases."
        },
        { 
            img: "src/assets/dci_ui/settings.jpg", 
            tech: "SETTINGS", 
            desc: "This screen displays modifiable settings, usually used to add a database connection, user, or view the audit log for accountability and logging."
        },
        { 
            img: "src/assets/dci_ui/fixing_conflicts.jpg", 
            tech: "CONFLICT FIXING", 
            desc: "This shows what happens when a conflict is fixed. In some cases, it may not succeed if the system detects a possible data loss when executing the fix."
        },
    ],
  },
  {
    header: "INTERNSHIP INTERNAL PROJECT",
    title: "Ticksy",
    bg: "bg-[#0b1722]",
    cardBg: "bg-[#0f1f2e]",
    subtitle: "WORK TIME TRACKING AND PRODUCTIVITY TOOL",
    desc: `
Ticksy is a web-based time tracking system designed to help teams and individuals
monitor their work hours, manage schedules, and improve productivity. The system
allows employees to record working sessions while giving administrators tools to
manage schedules and review time logs.

The platform focuses on simple and efficient time tracking with clear reporting
features that help organizations monitor employee productivity and attendance.`,
    tech: "VUE | ASP.NET | POSTGRESQL",
    features: `
• Time tracking and work session logging
• Employee work schedule management
• Administrative dashboard for monitoring logs
• Productivity and time report generation
• Secure authentication and role-based access`,
    projectScreenshots: [
        { 
            img: "src/assets/ticksy_ui/landing.jpg", 
            title: "ticksyXperience", 
            subtitle: "CAPSTONE PROJECT", 
            tech: "REACT | LARAVEL | MYSQL", 
            desc: "CaterXperience is a project my team and I developed during college. It is a catering operations and 2D venue layout platform developed to cater to a real client’s needs."
        },
        { 
            img: "src/assets/ticksy_ui/dashboard.jpg", 
            tech: "DASHBOARD", 
            desc: "The main dashboard provides an overview of ongoing events, bookings, and system notifications for efficient catering management."
        },
        { 
            img: "src/assets/ticksy_ui/bookings.jpg", 
            tech: "BOOKINGS", 
            desc: "The bookings page allows staff to manage customer reservations, view details, and track upcoming events seamlessly."
        },
        { 
            img: "src/assets/ticksy_ui/event.jpg", 
            tech: "EVENT DETAILS", 
            desc: "This screen displays detailed event information, including schedules, assigned staff, and venue setup plans."
        },
        { 
            img: "src/assets/ticksy_ui/menu.jpg", 
            tech: "MENU", 
            desc: "The menu section lets users view and manage food options, including their categorie and pictures."
        },
        { 
            img: "src/assets/ticksy_ui/packages.jpg", 
            tech: "PACKAGES", 
            desc: "Here, catering packages are showcased, allowing clients to select predefined combinations of services, themes, and addons."
        },
        { 
            img: "src/assets/ticksy_ui/client.jpg", 
            tech: "CLIENT MANAGEMENT", 
            desc: "The client management interface keeps track of customer profiles, contact information, and booking history."
        },
        { 
            img: "src/assets/ticksy_ui/staff.jpg", 
            tech: "STAFFF MANAGEMENT", 
            desc: "This page shows the staff roster, their roles, and schedules, making team management more organized."
        },
        { 
            img: "src/assets/ticksy_ui/layout.jpg", 
            tech: "2D VENUE LAYOUT", 
            desc: "The 2D venue layout planner allows users to design seating arrangements and event setups visually."
        },
        { 
            img: "src/assets/ticksy_ui/audit.jpg", 
            tech: "AUDIT LOG", 
            desc: "The audit log records system activity and changes, helping maintain accountability and track actions."
        },
    ],
  },
  {
    header: "COLLEGE SEMESTRAL PROJECT",
    title: "CAMS",
    bg: "bg-[#0f1f2e]",
    cardBg: "bg-[#0b1722]",
    subtitle: "COURSE ATTENDANCE MONITORING SYSTEM",
    desc: `
CAMS is a web-based and mobile-integrated academic management system designed
to help instructors efficiently track and manage student attendance across courses and
sections. The system organizes attendance records through course assignments that
link instructors, courses, sections, rooms, and schedules in a centralized platform.

The system replaces manual attendance tracking with a digital solution that allows
instructors to record attendance per class session and review organized attendance
records for better monitoring and management.`,
    tech: "REACT | PHP | MYSQL | JAVA | VOLLEY",
    features: `
• QR Code scanning for easy attendance recording for students
• Course assignment management linking instructors, courses, sections, rooms, and schedules
• Instructor dashboard for managing attendance and class sessions
• Student dashboard displaying upcoming classes, schedule, and recent attendance
• Centralized database structure for courses, sections, and attendance records`,
    projectScreenshots: [
        { 
            img: "src/assets/cams_ui/login.png", 
            title: "CAMS", 
            subtitle: "COLLEGE PROJECT", 
            tech: "REACT | PHP | MYSQL | JAVA | VOLLEY", 
            desc: "The Course Attendance Monitoring System is a project my team and I developed for the sake of producing a centralized platform for attendance tracking. It has multiple users: admin, instructor, and student."
        },
        { 
            img: "src/assets/cams_ui/admin_dashboard.png", 
            tech: "DASHBOARD", 
            desc: "The admin dashboard provides an overview and statistics of the attendances to monitor the overall records in the system."
        },
        { 
            img: "src/assets/cams_ui/admin_courses.png", 
            tech: "COURSE LIST", 
            desc: "The course list allows the administrator to add and manage all the courses that can be assigned to students and instructors."
        },
        { 
            img: "src/assets/cams_ui/admin_users.png", 
            tech: "USERS", 
            desc: "This page displays all the users registered to the system, may it be students or instructors."
        },
        { 
            img: "src/assets/cams_ui/section_list.png", 
            tech: "SECTIONS", 
            desc: "The section list displays all the sections where the student may belong to for easier management and enrollment in courses."
        },
        { 
            img: "src/assets/cams_ui/reports.png", 
            tech: "REPORTS", 
            desc: "The reports page includes analytics and full statistics of all the records in the system, may it be absences, lates, and overall attendance records."
        },
        { 
            img: "src/assets/cams_ui/audit.png", 
            tech: "AUDIT LOG", 
            desc: "The audit log allows the administrator to keep track of all activity happening inside the system."
        },
        { 
            img: "src/assets/cams_ui/instructor_courses.png", 
            tech: "INSTRUCTOR COURSES", 
            desc: "This page displays all the courses assigned to the instructor depending on the section."
        },
        { 
            img: "src/assets/cams_ui/course_details.png", 
            tech: "COURSE DETAILS", 
            desc: "The course details allows the instructor to keep track of all attendances and enrolled students of a course they are assigned to."
        },
        { 
            img: "src/assets/cams_ui/student_list.png", 
            tech: "STUDENT LIST", 
            desc: "The student list displays all the students assigned to the course for the instructors' knowledge."
        },
        { 
            img: "src/assets/cams_ui/mobile_login.jpg", 
            tech: "STUDENT LOGIN", 
            desc: "This login page is exclusive for the mobile app designed for students, integrated with the website."
        },
        { 
            img: "src/assets/cams_ui/student_dashboard.jpg", 
            tech: "STUDENT DASHBOARD", 
            desc: "The student dashboard displays all the information the students may need to know right away such as upcoming classes."
        },
        { 
            img: "src/assets/cams_ui/student_courses.jpg", 
            tech: "STUDENT COURSES", 
            desc: "Student courses display the list of courses the student is currently enrolled in."
        },
        { 
            img: "src/assets/cams_ui/student_attendance.jpg", 
            tech: "STUDENT ATTENDANCE", 
            desc: "Here, students may view their course details, mostly consisted of their attendance records."
        },
        { 
            img: "src/assets/cams_ui/student_qr.jpg", 
            tech: "QR CODE SCANNING", 
            desc: "The QR code scanning page is a feature where the students may scan the system-generated qr code in the website so they can log their attendance right away. They may also input a unique code if their camera is non-functional."
        },
    ],
  },
  {
    header: "COLLEGE SEMESTRAL PROJECT",
    title: "Laundry Management System",
    bg: "bg-[#0b1722]",
    cardBg: "bg-[#0f1f2e]",
    subtitle: "OPERATIONS AND ORDER MANAGEMENT PLATFORM FOR WASHABLES",
    desc: `
The Laundry Management System (LMS) is a web-based application designed to
modernize the operations of Washables Laundry Services by replacing manual
logbooks with a centralized digital platform.

The system allows staff to record customer orders, monitor laundry schedules, track
cleaning supplies, and generate billing records. By automating these tasks, the
platform helps the business handle higher order volumes while maintaining organized
records and faster service.`,
    tech: "C# | .NET | SQL SERVER",
    features: `
• Order management and customer record tracking
• Machine scheduling for laundry loads
• Inventory tracking for cleaning supplies
• Billing with digital receipts and payment logging (Cash and GCash)
• User management for staff and administrators`,
    projectScreenshots: [
        { 
            img: "src/assets/lms_ui/login.jpg", 
            title: "LMS", subtitle: "COLLEGE PROJECT", 
            tech: "C# | .NET | SQL SERVER", 
            desc: "The Laundry Management System is a project we developed to help a laundry business shift from manual logbooks to a more organized digital system. It focuses on handling orders, tracking laundry progress, and managing daily operations more efficiently."
        },
        { 
            img: "src/assets/lms_ui/dashboard.jpg", 
            tech: "DASHBOARD", 
            desc: "The dashboard gives a quick overview of daily operations, including ongoing orders, schedules, and important updates, so staff can easily keep track of what needs to be done."
        },
        { 
            img: "src/assets/lms_ui/laundry_tracking.jpg", 
            tech: "LAUNDRY TRACKING", 
            desc: "This page allows staff to monitor the status of each laundry order visually, from washing to drying, making it easier to track progress and avoid delays."
        },
        { 
            img: "src/assets/lms_ui/schedule.jpg", 
            tech: "SCHEDULING", 
            desc: "The scheduling feature helps organize laundry loads by assigning them to specific machines and time slots, preventing overlaps and improving workflow."
        },
        { 
            img: "src/assets/lms_ui/order_form.jpg", 
            tech: "ORDER FORM", 
            desc: "This is where staff input customer orders, including laundry type, quantity, and service details, ensuring everything is properly recorded from the start."
        },
        { 
            img: "src/assets/lms_ui/services.jpg", 
            tech: "SERVICES", 
            desc: "The services page lists the available laundry options along with their pricing, making it easy for staff to select and apply the correct service for each order."
        },
        { 
            img: "src/assets/lms_ui/equipment.jpg", 
            tech: "EQUIPMENT", 
            desc: "This section keeps track of the machines and equipment used in operations, helping staff monitor availability and usage."
        },
        { 
            img: "src/assets/lms_ui/inventory.jpg", 
            tech: "INVENTORY", 
            desc: "The inventory page manages cleaning supplies like detergents and fabric conditioners, allowing staff to monitor stock levels and avoid shortages."
        },
        { 
            img: "src/assets/lms_ui/customers.jpg", 
            tech: "CUSTOMERS", 
            desc: "This page stores customer information, making it easier to manage repeat clients and keep records organized."
        },
        { 
            img: "src/assets/lms_ui/complaints.jpg", 
            tech: "COMPLAINTS", 
            desc: "The complaints section allows staff to log and track customer concerns, helping improve service and ensure issues are properly addressed."
        },
        { 
            img: "src/assets/lms_ui/users.jpg", 
            tech: "USERS", 
            desc: "This page manages system users, including staff and admins, with controls for access and roles within the system."
        },
        { 
            img: "src/assets/lms_ui/payments.jpg", 
            tech: "PAYMENT", 
            desc: "The payment page records transactions and supports different payment methods, helping keep billing accurate and organized."
        },
        { 
            img: "src/assets/lms_ui/transaction_history.jpg", 
            tech: "TRANSACTION HISTORY", 
            desc: "This section provides a complete record of all past transactions, making it easy to review orders and track business activity over time."
        },
        { 
            img: "src/assets/lms_ui/report.jpg", 
            tech: "SALES REPORT", 
            desc: "The reports page generates summaries of sales, orders, and operations, helping the business analyze performance and make better decisions."
        },
        { 
            img: "src/assets/lms_ui/activity_log.jpg", 
            tech: "ACTIVITY LOG", 
            desc: "The activity log tracks user actions within the system, adding transparency and helping monitor any important changes or updates."
        },
    ]
  },
  {
    header: "COLLEGE SEMESTRAL PROJECT",
    title: "Dental Appointment and Information System",
    bg: "bg-[#0f1f2e]",
    cardBg: "bg-[#0b1722]",
    subtitle: "CLINIC SCHEDULING AND PATIENT RECORDS MANAGEMENT SYSTEM",
    desc: `
The Dental Appointment and Information System is a desktop application designed to
improve dental clinic operations by digitizing appointment scheduling and patient
record management. It replaces traditional paper-based records with a centralized
platform that allows clinic staff to manage appointments, patient information, and
services more efficiently.

The system enables staff to schedule appointments, maintain organized patient
records, and manage clinic services from a single interface, helping reduce scheduling
errors, prevent record misplacement, and improve overall clinic workflow.`,
    tech: "C# | .NET | SQL SERVER",
    features: `
• Secure staff authentication and login system
• Appointment scheduling with calendar-based viewing
• Patient registration and medical record management
• Staff account management for clinic personnel
• Service registration and pricing management
• Centralized database for clinic records and appointments`,
    projectScreenshots: [
        { 
            img: "src/assets/dais_ui/login.jpg", 
            title: "DAIS", 
            subtitle: "COLLEGE PROJECT", 
            tech: "C# | .NET | SQL SERVER", 
            desc: "The Dental Appointment and Information System is a project we developed to help clinics manage appointments and patient records in a more organized and efficient way. It replaces manual processes with a centralized system for daily clinic operations." },
        { 
            img: "src/assets/dais_ui/dashboard.jpg", 
            tech: "DASHBOARD", 
            desc: "The dashboard gives a quick overview of appointments, patient activity, and daily schedules, helping staff stay updated at a glance."
        },
        { 
            img: "src/assets/dais_ui/calendar.jpg", 
            tech: "CALENDAR", 
            desc: "The calendar view allows staff to see scheduled appointments by date, making it easier to plan and avoid conflicts."
        },
        { 
            img: "src/assets/dais_ui/appointments.jpg", 
            tech: "APPOINTMENTS", 
            desc: "This page lists all appointments with their details, including patient information, schedule, and service type."
        },
        { 
            img: "src/assets/dais_ui/new_appointment.jpg", 
            tech: "NEW APPOINTMENT", 
            desc: "This form is used to create and schedule new appointments, allowing staff to quickly input patient and service details."
        },
        { 
            img: "src/assets/dais_ui/patients.jpg", 
            tech: "PATIENTS", 
            desc: "The patients page stores and manages basic patient information, making it easy to access and update records."
        },
        { 
            img: "src/assets/dais_ui/patient_dentals.jpg", 
            tech: "DENTAL CHART", 
            desc: "This section displays dental-specific information for each patient, helping track treatments and dental conditions over time."
        },
        { 
            img: "src/assets/dais_ui/patient_records.jpg", 
            tech: "PATIENT RECORDS", 
            desc: "The patient records page keeps a detailed history of treatments, visits, and notes for each patient."
        },
        { 
            img: "src/assets/dais_ui/staff.jpg", 
            tech: "STAFF", 
            desc: "This page manages clinic staff accounts, including their roles and access within the system."
        },
        { 
            img: "src/assets/dais_ui/services.jpg", 
            tech: "SERVICES", 
            desc: "The services section lists available dental procedures along with their pricing, making it easier to assign services to appointments."
        },
    ]
  },
];