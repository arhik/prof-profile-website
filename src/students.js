export class Students{
	students = {
		undergraduates: ["Dan","Jimmy","Bobby","Richard","George"],
		graduates : ["Karthik", "AK"],
		phds : {
			Shekar : {
				"fullname":"Venkateswaran Shekar",
				"Research Interests" : ["Traffic Engineering", "High Performance Computing", "Artificial Intelligence", "Machine Learning"],
				"linkedin": "https://www.linkedin.com/in/vshekar",
				"personal": "http://www.vshekar.com/",
				"image": "/src/images/shekar_profile.png"
			},

			Vidhya : {
				"fullname" : "Vidhyashree Nagaraju",
				"Research Interests" : [],
				"linkedin" : "",
				"personal" : "",
				"image" : "/src/images/nagaraju_vidhya.jpg"
			},

			Hoda : {
				"fullname" : "Bentolhoda Jafary",
				"Research Interests" : ["Check pointing", "Reliability"],
				"linkedin" : "",
				"personal" : "",
				"image" : "/src/images/hoda.jpg"
			},

			Saikath : {
				"fullname" : "Saikath Bhattacharya",
				"Research Interests" : ["Reliability","Prognostics","Wireless sensor networks","Machine learning", "Electronics"],
				"linkedin" : "",
				"personal" : "",
				"image" : "/src/images/saikath.jpg"
			}

		}
	}
	phdlist = Object.keys(this.students.phds)

	graduatelist = Object.keys(this.students.graduates)

	undergraduates = Object.keys(this.students.undergraduates)

	former_students = {
		undergraduates : [],
		graduates : [],
		phds : []
	}
	
}