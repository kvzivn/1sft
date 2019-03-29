var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var emails = [
    {
        "from": "Kevin Properties",
        "address": "kevin@propertyowners.com",
        "time": "2015-08-30 14:00:12",
        "message": "I live in Toronto, ON. I reviewed the financials, the required documents and the documents that you will provide. I would like to purchase 10 shares of the Single-family rental home for a total of $10,000. I look forward to hearing back from you",
        "subject": "Luxury Home-Big Family",
        "tag": "inbox",
        "read": "true"
    },
    {
        "from": "Keller Estates",
        "address": "digest@dribbble.com",
        "time": "2016-05-09 14:23:54",
        "message": "Here are the latest shots from Dribbblers you follow! Nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
        "subject": "Calgary Condominiums",
        "tag": "inbox",
        "read": "false"
    },
    {
        "from": "Wylie Roberson",
        "address": "mi@utnisi.edu",
        "time": "2016-01-08 18:39:34",
        "message": "Every wish you could read all this Lorem Ipsum stuff? Subornareornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices",
        "subject": "Learn latin in 10 days!",
        "tag": "deleted",
        "read": "true"
    },
    {
        "from": "Slack HQ",
        "address": "fishbowl@slack.com",
        "time": "2015-07-21 09:47:57",
        "message": "Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",
        "subject": "Join the Fishbowl Team",
        "tag": "inbox",
        "read": "true"
    },
    {
        "from": "Christopher Medina",
        "address": "dolor@luctusutpellentesque.net",
        "time": "2015-07-03 21:48:27",
        "message": "Woops, that last pull request messed up the csproj. Mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra",
        "subject": "Vancouver homes",
        "tag": "inbox",
        "read": "false"
    },
    {
        "from": "Wylie Roberson",
        "address": "mi@utnisi.edu",
        "time": "2016-01-08 18:39:34",
        "message": "Every wish you could read all this Lorem Ipsum stuff? Subornareornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices",
        "subject": "Learn latin in 10 days!",
        "tag": "deleted",
        "read": "true"
    },
    {
        "from": "Keller Estates",
        "address": "digest@dribbble.com",
        "time": "2016-05-09 14:23:54",
        "message": "Here are the latest shots from Dribbblers you follow! Nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
        "subject": "Calgary Condominiums",
        "tag": "inbox",
        "read": "false"
    },
    {
        "from": "Slack HQ",
        "address": "fishbowl@slack.com",
        "time": "2015-07-21 09:47:57",
        "message": "Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",
        "subject": "Join the Fishbowl Team",
        "tag": "inbox",
        "read": "true"
    },
  {
    "from": "Wylie Roberson",
    "address": "mi@utnisi.edu",
    "time": "2016-01-08 18:39:34",
    "message": "Every wish you could read all this Lorem Ipsum stuff? Subornareornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices",
    "subject": "Learn latin in 10 days!",
    "tag": "deleted",
    "read": "true"
  },
  {
    "from": "Slack HQ",
    "address": "fishbowl@slack.com",
    "time": "2015-07-21 09:47:57",
    "message": "Click here to consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",
    "subject": "Join the Fishbowl Team",
    "tag": "inbox",
    "read": "true"
  },
]

// Helper methods
const getPrettyDate = date => {
    date = date.split(' ')[0];
    const newDate = date.split('-');
    const month = months[0];
    return `${month} ${newDate[2]}, ${newDate[0]}`;
};

// Remove the seconds from the time
const getPrettyTime = date => {
    const time = date.split(' ')[1].split(':');
    return `${time[0]}:${time[1]}`;
};

/* App */
class App extends React.Component {
    constructor(args) {
        super(args);

        // Assign unique IDs to the emails
        const emails = this.props.emails;
        let id = 0;
        for (const email of emails) {
            email.id = id++;
        }

        this.state = {
            selectedEmailId: 0,
            currentSection: 'inbox',
            emails
        };

    }

    openEmail(id) {
        const emails = this.state.emails;
        const index = emails.findIndex(x => x.id === id);
        emails[index].read = 'true';
        this.setState({
            selectedEmailId: id,
            emails
        });

    }

    deleteMessage(id) {
        // Mark the message as 'deleted'
        const emails = this.state.emails;
        const index = emails.findIndex(x => x.id === id);
        emails[index].tag = 'deleted';

        // Select the next message in the list
        let selectedEmailId = '';
        for (const email of emails) {
            if (email.tag === this.state.currentSection) {
                selectedEmailId = email.id;
                break;
            }
        }

        this.setState({
            emails,
            selectedEmailId
        });

    }

    setSidebarSection(section) {
        let selectedEmailId = this.state.selectedEmailId;
        if (section !== this.state.currentSection) {
            selectedEmailId = '';
        }

        this.setState({
            currentSection: section,
            selectedEmailId
        });

    }

    render() {
        const currentEmail = this.state.emails.find(x => x.id === this.state.selectedEmailId);
        return (
            React.createElement("div", null,
                React.createElement(Sidebar, {
                    emails: this.props.emails,
                    setSidebarSection: section => { this.setSidebarSection(section); }
                }),
                React.createElement("div", { className: "inbox-container" },
                    React.createElement(EmailList, {
                        emails: this.state.emails.filter(x => x.tag === this.state.currentSection),
                        onEmailSelected: id => { this.openEmail(id); },
                        selectedEmailId: this.state.selectedEmailId,
                        currentSection: this.state.currentSection
                    }),
                    React.createElement(EmailDetails, {
                        email: currentEmail,
                        onDelete: id => { this.deleteMessage(id); }
                    }))));
    }
}


/* Sidebar */
const Sidebar = ({ emails, setSidebarSection }) => {
    var unreadCount = emails.reduce(
        function (previous, msg) {
            if (msg.read !== "true") {
                return previous + 1;
            } else {
                return previous;
            }
        }.bind(this), 0);

    var deletedCount = emails.reduce(
        function (previous, msg) {
            if (msg.tag === "deleted") {
                return previous + 1;
            } else {
                return previous;
            }
        }.bind(this), 0);

    return (
        React.createElement("div", { id: "sidebar" },
            React.createElement("div", { className: "sidebar__compose" },
                React.createElement("a", { href: "#", className: "btn compose" }, "Compose ",
                    React.createElement("span", { className: "fa fa-pencil" }))),


            React.createElement("ul", { className: "sidebar__inboxes" },
                React.createElement("li", { onClick: () => { setSidebarSection('inbox'); } }, React.createElement("a", null,
                    React.createElement("span", { className: "fa fa-inbox" }), " Inbox",
                    React.createElement("span", { className: "item-count" }, unreadCount))),
                React.createElement("li", { onClick: () => { setSidebarSection('sent'); } }, React.createElement("a", null,
                    React.createElement("span", { className: "fa fa-paper-plane" }), " Sent",
                    React.createElement("span", { className: "item-count" }, "0"))),
                React.createElement("li", { onClick: () => { setSidebarSection('drafts'); } }, React.createElement("a", null,
                    React.createElement("span", { className: "fa fa-pencil-square-o" }), " Drafts",
                    React.createElement("span", { className: "item-count" }, "0"))),

                React.createElement("li", { onClick: () => { setSidebarSection('deleted'); } }, React.createElement("a", null,
                    React.createElement("span", { className: "fa fa-trash-o" }), " Trash",
                    React.createElement("span", { className: "item-count" }, deletedCount))))));




};

/* Email classes */
const EmailListItem = ({ email, onEmailClicked, selected }) => {
    let classes = "email-item";
    if (selected) {
        classes += " selected";
    }

    return (
        React.createElement("div", { onClick: () => { onEmailClicked(email.id); }, className: classes },
            React.createElement("div", { className: "email-item__unread-dot", "data-read": email.read }),
            React.createElement("div", { className: "email-item__subject truncate" }, email.subject),
            React.createElement("div", { className: "email-item__details" },
                React.createElement("span", { className: "email-item__from truncate" }, email.from),
                React.createElement("span", { className: "email-item__time truncate" }, getPrettyDate(email.time)))));



};

const EmailDetails = ({ email, onDelete }) => {
    if (!email) {
        return (
            React.createElement("div", { className: "email-content empty" }));
    }

    const date = `${getPrettyDate(email.time)} · ${getPrettyTime(email.time)}`;

    const getDeleteButton = () => {
        if (email.tag !== 'deleted') {
            return React.createElement("span", { onClick: () => { onDelete(email.id); }, className: "delete-btn fa fa-trash-o" });
        }
        return undefined;
    };

    return (
        React.createElement("div", { className: "email-content" },
            React.createElement("div", { className: "email-content__header" },
                React.createElement("h3", { className: "email-content__subject" }, email.subject),
                React.createElement("button", { className: "button button--inbox js-modalBtn" }, 'Accept Documents'),
                React.createElement("button", { className: "button button--inbox button--secondary" }, 'Cancel Transaction'),
                React.createElement("div", { className: "email-content__time" }, date),
                React.createElement("div", { className: "email-content__from" }, email.from)),
                React.createElement("div", { className: "email-content__message" }, email.message),
            React.createElement("div", { className: "email-content__message sellerMessage" }, 'Saamer has accepted your proposal. Kevin, please verify and accept the documents provided to complete the transaction.')))
};

/* EmailList contains a list of Email components */
const EmailList = ({ emails, onEmailSelected, selectedEmailId }) => {
    if (emails.length === 0) {
        return (
            React.createElement("div", { className: "email-list empty" }, "Nothing to see here, great job!"));
    }

    return (
        React.createElement("div", { className: "email-list" },

            emails.map(email => {
                return (
                    React.createElement(EmailListItem, {
                        onEmailClicked: id => { onEmailSelected(id); },
                        email: email,
                        selected: selectedEmailId === email.id
                    }));

            })));

};


React.render(React.createElement(App, { emails }), document.getElementById('inbox'));
