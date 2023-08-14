import { NextResponse } from "next/server";

export async function POST(request) {
  const json = await request.json();

  console.log("🚀 ~ file: cta-api.js:2 ~ POST ~ request:", json);

  const headers = new Headers();
  headers.set('content-type', 'application/json')

    
    let data =  {
        "booking_info": [
            {
                "relation_id": 348260,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "10:40 AM, tomorrow",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": "2023-08-10T05:10:00.000+0000",
                        "text": "10:40 AM, tomorrow"
                    },
                    "secondary_cta": {
                        "type": null,
                        "availability_text": null,
                        "cta_text": null,
                        "is_disabled": null,
                        "availability_timestamp": null
                    }
                },
                "vn_phone_number": {
                    "extension": null,
                    "number": null
                },
                "safe_visit": {
                    "status": "Open",
                    "updated_text": "Updated today"
                }
            },
            {
                "relation_id": 348276,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "No Slots for next 5 days",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "No Slots for next 5 days"
                    },
                    "secondary_cta": {
                        "type": "call",
                        "availability_text": "03:30 PM, 11th Aug",
                        "cta_text": "Call Now",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "03:30 PM, 11th Aug"
                    }
                },
                "vn_phone_number": {
                    "extension": "281",
                    "number": "+918068960982"
                },
                "safe_visit": {
                    "status": null,
                    "updated_text": null
                }
            },
            {
                "relation_id": 348294,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "No Slots for next 5 days",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "No Slots for next 5 days"
                    },
                    "secondary_cta": {
                        "type": "call",
                        "availability_text": "12:00 PM, 11th Aug",
                        "cta_text": "Call Now",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "12:00 PM, 11th Aug"
                    }
                },
                "vn_phone_number": {
                    "extension": "546",
                    "number": "+918046801992"
                },
                "safe_visit": {
                    "status": null,
                    "updated_text": null
                }
            },
            {
                "relation_id": 348296,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "05:30 PM, 11th Aug",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": "2023-08-11T12:00:00.000+0000",
                        "text": "05:30 PM, 11th Aug"
                    },
                    "secondary_cta": {
                        "type": null,
                        "availability_text": null,
                        "cta_text": null,
                        "is_disabled": null,
                        "availability_timestamp": null
                    }
                },
                "vn_phone_number": {
                    "extension": null,
                    "number": null
                },
                "safe_visit": {
                    "status": "Open",
                    "updated_text": "Updated today"
                }
            },
            {
                "relation_id": 348302,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "05:10 PM, 11th Aug",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": "2023-08-11T11:40:00.000+0000",
                        "text": "05:10 PM, 11th Aug"
                    },
                    "secondary_cta": {
                        "type": null,
                        "availability_text": null,
                        "cta_text": null,
                        "is_disabled": null,
                        "availability_timestamp": null
                    }
                },
                "vn_phone_number": {
                    "extension": null,
                    "number": null
                },
                "safe_visit": {
                    "status": "Open",
                    "updated_text": "Updated today"
                }
            },
            {
                "relation_id": 348309,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "12:30 PM, 12th Aug",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": "2023-08-12T07:00:00.000+0000",
                        "text": "12:30 PM, 12th Aug"
                    },
                    "secondary_cta": {
                        "type": null,
                        "availability_text": null,
                        "cta_text": null,
                        "is_disabled": null,
                        "availability_timestamp": null
                    }
                },
                "vn_phone_number": {
                    "extension": null,
                    "number": null
                },
                "safe_visit": {
                    "status": "Open",
                    "updated_text": "Updated today"
                }
            },
            {
                "relation_id": 348334,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "No Slots for next 5 days",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "No Slots for next 5 days"
                    },
                    "secondary_cta": {
                        "type": "call",
                        "availability_text": "09:00 AM, tomorrow",
                        "cta_text": "Call Now",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "09:00 AM, tomorrow"
                    }
                },
                "vn_phone_number": {
                    "extension": "104",
                    "number": "+918047106875"
                },
                "safe_visit": {
                    "status": null,
                    "updated_text": null
                }
            },
            {
                "relation_id": 348337,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "No Slots for next 5 days",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "No Slots for next 5 days"
                    },
                    "secondary_cta": {
                        "type": "call",
                        "availability_text": "06:50 PM, today",
                        "cta_text": "Call Now",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "06:50 PM, today"
                    }
                },
                "vn_phone_number": {
                    "extension": "002",
                    "number": "+918047106898"
                },
                "safe_visit": {
                    "status": null,
                    "updated_text": null
                }
            },
            {
                "relation_id": 348346,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "No Slots for next 5 days",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "No Slots for next 5 days"
                    },
                    "secondary_cta": {
                        "type": "call",
                        "availability_text": "09:00 AM, tomorrow",
                        "cta_text": "Call Now",
                        "is_disabled": null,
                        "availability_timestamp": null,
                        "text": "09:00 AM, tomorrow"
                    }
                },
                "vn_phone_number": {
                    "extension": "003",
                    "number": "+918047106898"
                },
                "safe_visit": {
                    "status": null,
                    "updated_text": null
                }
            },
            {
                "relation_id": 348393,
                "cta_data_v2": {
                    "header_text": "NEXT AVAILABLE AT",
                    "primary_cta": {
                        "type": "book",
                        "availability_text": "06:40 PM, tomorrow",
                        "cta_text": "Book Clinic Visit",
                        "is_disabled": null,
                        "availability_timestamp": "2023-08-10T13:10:00.000+0000",
                        "text": "06:40 PM, tomorrow"
                    },
                    "secondary_cta": {
                        "type": null,
                        "availability_text": null,
                        "cta_text": null,
                        "is_disabled": null,
                        "availability_timestamp": null
                    }
                },
                "vn_phone_number": {
                    "extension": null,
                    "number": null
                },
                "safe_visit": {
                    "status": "Open",
                    "updated_text": "Updated today"
                }
            }
        ]
    }
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },

  })
  
  }