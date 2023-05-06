export interface Register {
    fname: String,
    lname: String,
    email: String,
    contact: String,
    city: String,
    role: String,
    password: String,
    confirmPassword: String
}

export interface Login {
    email: String,
    password: String,

}


export interface Profile {
    title: String,
    fname: String,
    lname: String,
    dob: String,
    fatherName: String,
    motherName: String,
    email: String,
    contact: String,
    AltContact: String,

    addressA: String,
    cityA: String,
    stateA: String,
    pincodeA: String,

    addressB: String,
    cityB: String,
    stateB: String,
    pincodeB: String,
    photo: String,
}

export interface Education {
    course: String,
    specialization: String,
    maxMarks: String,
    obtMarks: String,
    boardUniversity: String,
    year: String,
    location: String

}

export interface Employment {
    organization: String,
    post: String,
    role: String,
    responsbility: String,
    joiningDate: String,
    lastDate: String,
    isTillNow: Boolean,
    description: String,
}

export interface Newsletter {
    email: String,
    subcribedFor: String,
    status: Boolean
}

export interface contactus {
    fullName: String,
    email: String,
    contact: String,
    subject: String,
    message: String,
    read: Boolean,
    website: String,
}

export interface leveltwo {
    title: String,
}

export interface levelone {
    fullName: String,
    enrollment: String,
    university: String,
    logo: String,
    address: String,
    date: String,
    year: String,
    title: String,
    subject: String,
    faculty: String,
}