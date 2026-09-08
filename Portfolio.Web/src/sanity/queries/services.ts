const servicesQuery = /* groq */ `*[_type == "serviceType"] | order(_createdAt asc){
    _id,
    title,
    description,
    price,
    "from": isFrom,
    notes
}`;

export { servicesQuery };
