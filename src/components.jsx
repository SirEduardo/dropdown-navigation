export function Features () {
    return(
      <ul className="lg:absolute right-0 mt-2 w-36 py-4 bg-white rounded-lg flex flex-col gap-2 cursor-pointer">
        <li className="flex items-center justify-start gap-3 pl-6 hover:text-gray-900"><img className="w-4 h-4" src="../images/icon-todo.svg"/>Todo List</li>
        <li className="flex items-center justify-start gap-3 pl-6 hover:text-gray-900"><img className="w-4 h-4" src="../images/icon-calendar.svg"/>Calendar</li>
        <li className="flex items-center justify-start gap-3 pl-6 hover:text-gray-900"><img className="w-4 h-4" src="../images/icon-reminders.svg"/>Reminders</li>
        <li className="flex items-center justify-start gap-3 pl-6 hover:text-gray-900"><img className="w-4 h-4" src="../images/icon-planning.svg"/>Planning</li>
      </ul>
    )
}

export function Company () {
    return(
      <ul className="lg:absolute bg-white w-28 py-4 mt-2 rounded-lg flex flex-col gap-2 cursor-pointer">
        <li className="flex pl-6 hover:text-gray-900">History</li>
        <li className="flex pl-6 hover:text-gray-900">Our Team</li>
        <li className="flex pl-6 hover:text-gray-900">Blog</li>
      </ul>
    )
}