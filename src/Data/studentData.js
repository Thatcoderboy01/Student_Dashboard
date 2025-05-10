const studentData = [
  {
    name: 'Ritesh Ray',
    rollNumber: 'BCA2025001',
    course: 'BCA (Cloud & Security)',
    year: '2nd Year',
    email: 'riteshray0711@gmail.com'
  },
  {
    name: 'John Doe',
    rollNumber: 'BCA2025002',
    course: 'BCA (Data Science)',
    year: '2nd Year',
    email: 'john@example.com'
  },
  {
    name: 'Alice Smith',
    rollNumber: 'BCA2025003',
    course: 'BCA (Cyber Security)',
    year: '3rd Year',
    email: 'alice@example.com'
  },
  {
    name: 'Bob Brown',
    rollNumber: 'BCA2025004',
    course: 'BCA (AI & Machine Learning)',
    year: '1st Year',
    email: 'bob@example.com'
  },
  {
    name: 'Emma Wilson',
    rollNumber: 'BCA2025005',
    course: 'BCA (Cloud Computing)',
    year: '2nd Year',
    email: 'emma@example.com'
  },
  {
    name: 'Olivia Taylor',
    rollNumber: 'BCA2025006',
    course: 'BCA (Software Engineering)',
    year: '3rd Year',
    email: 'olivia@example.com'
  },
  {
    name: 'Mia Clark',
    rollNumber: 'BCA2025007',
    course: 'BCA (Game Development)',
    year: '1st Year',
    email: 'mia@example.com'
  },
  {
    name: 'Liam Johnson',
    rollNumber: 'BCA2025008',
    course: 'BCA (Networking)',
    year: '2nd Year',
    email: 'liam@example.com'
  },
  {
    name: 'Noah Martinez',
    rollNumber: 'BCA2025009',
    course: 'BCA (Database Management)',
    year: '2nd Year',
    email: 'noah@example.com'
  },
  {
    name: 'Sophia Lee',
    rollNumber: 'BCA2025010',
    course: 'BCA (Cloud & Security)',
    year: '3rd Year',
    email: 'sophialee@example.com'
  },
  {
    name: 'Jackson King',
    rollNumber: 'BCA2025011',
    course: 'BCA (Mobile App Development)',
    year: '2nd Year',
    email: 'jackson@example.com'
  },
  {
    name: 'Ava Harris',
    rollNumber: 'BCA2025012',
    course: 'BCA (Web Development)',
    year: '1st Year',
    email: 'avaharris@example.com'
  },
  {
    name: 'Lucas Scott',
    rollNumber: 'BCA2025013',
    course: 'BCA (Cloud Engineering)',
    year: '3rd Year',
    email: 'lucas@example.com'
  },
  {
    name: 'Mason Garcia',
    rollNumber: 'BCA2025014',
    course: 'BCA (IT Management)',
    year: '2nd Year',
    email: 'mason@example.com'
  },
  {
    name: 'Isabella Robinson',
    rollNumber: 'BCA2025015',
    course: 'BCA (Data Analytics)',
    year: '2nd Year',
    email: 'isabella@example.com'
  },
  {
    name: 'James Lewis',
    rollNumber: 'BCA2025016',
    course: 'BCA (Cloud Infrastructure)',
    year: '3rd Year',
    email: 'james@example.com'
  },
  {
    name: 'Benjamin Walker',
    rollNumber: 'BCA2025017',
    course: 'BCA (Business Intelligence)',
    year: '1st Year',
    email: 'benjamin@example.com'
  },
  {
    name: 'Charlotte Hall',
    rollNumber: 'BCA2025018',
    course: 'BCA (Software Testing)',
    year: '2nd Year',
    email: 'charlotte@example.com'
  },
  {
    name: 'Amelia Young',
    rollNumber: 'BCA2025019',
    course: 'BCA (Cloud Networking)',
    year: '2nd Year',
    email: 'amelia@example.com'
  },
  {
    name: 'Elijah Allen',
    rollNumber: 'BCA2025020',
    course: 'BCA (Information Security)',
    year: '3rd Year',
    email: 'elijah@example.com'
  },
  {
    name: 'Ethan Turner',
    rollNumber: 'BCA2025021',
    course: 'BCA (Cloud & DevOps)',
    year: '1st Year',
    email: 'ethan@example.com'
  },
  {
    name: 'Harper Mitchell',
    rollNumber: 'BCA2025022',
    course: 'BCA (Data Visualization)',
    year: '2nd Year',
    email: 'harper@example.com'
  },
  {
    name: 'Logan Perez',
    rollNumber: 'BCA2025023',
    course: 'BCA (AI & Robotics)',
    year: '3rd Year',
    email: 'logan@example.com'
  },
  {
    name: 'Evelyn Roberts',
    rollNumber: 'BCA2025024',
    course: 'BCA (System Administration)',
    year: '1st Year',
    email: 'evelyn@example.com'
  },
  {
    name: 'Henry Wright',
    rollNumber: 'BCA2025025',
    course: 'BCA (Ethical Hacking)',
    year: '2nd Year',
    email: 'henry@example.com'
  },
  {
    name: 'Abigail Green',
    rollNumber: 'BCA2025026',
    course: 'BCA (AR/VR Development)',
    year: '2nd Year',
    email: 'abigail@example.com'
  },
  {
    name: 'Sebastian Adams',
    rollNumber: 'BCA2025027',
    course: 'BCA (IoT)',
    year: '3rd Year',
    email: 'sebastian@example.com'
  },
  {
    name: 'Ella Nelson',
    rollNumber: 'BCA2025028',
    course: 'BCA (Blockchain)',
    year: '1st Year',
    email: 'ella@example.com'
  },
  {
    name: 'David Carter',
    rollNumber: 'BCA2025029',
    course: 'BCA (Information Systems)',
    year: '2nd Year',
    email: 'david@example.com'
  },
  {
    name: 'Scarlett Murphy',
    rollNumber: 'BCA2025030',
    course: 'BCA (Game Programming)',
    year: '3rd Year',
    email: 'scarlett@example.com'
  },
  {
    name: 'Aiden Rogers',
    rollNumber: 'BCA2025031',
    course: 'BCA (Machine Vision)',
    year: '1st Year',
    email: 'aiden@example.com'
  },
  {
    name: 'Grace Brooks',
    rollNumber: 'BCA2025032',
    course: 'BCA (Data Engineering)',
    year: '2nd Year',
    email: 'grace@example.com'
  },
  {
    name: 'Samuel Gray',
    rollNumber: 'BCA2025033',
    course: 'BCA (Cloud Applications)',
    year: '2nd Year',
    email: 'samuel@example.com'
  },
  {
    name: 'Chloe Cooper',
    rollNumber: 'BCA2025034',
    course: 'BCA (Human-Computer Interaction)',
    year: '3rd Year',
    email: 'chloe@example.com'
  },
  {
    name: 'Jack Bell',
    rollNumber: 'BCA2025035',
    course: 'BCA (Digital Forensics)',
    year: '2nd Year',
    email: 'jack@example.com'
  },
  {
    name: 'Luna Ward',
    rollNumber: 'BCA2025036',
    course: 'BCA (Multimedia)',
    year: '1st Year',
    email: 'luna@example.com'
  },
  {
    name: 'Wyatt Cox',
    rollNumber: 'BCA2025037',
    course: 'BCA (Computational Linguistics)',
    year: '2nd Year',
    email: 'wyatt@example.com'
  },
  {
    name: 'Zoe Diaz',
    rollNumber: 'BCA2025038',
    course: 'BCA (Bioinformatics)',
    year: '3rd Year',
    email: 'zoe@example.com'
  },
  {
    name: 'Dylan Hayes',
    rollNumber: 'BCA2025039',
    course: 'BCA (Parallel Computing)',
    year: '2nd Year',
    email: 'dylan@example.com'
  },
  {
    name: 'Nora Patterson',
    rollNumber: 'BCA2025040',
    course: 'BCA (Big Data)',
    year: '1st Year',
    email: 'nora@example.com'
  },
  {
    name: 'Levi Russell',
    rollNumber: 'BCA2025041',
    course: 'BCA (Quantum Computing)',
    year: '3rd Year',
    email: 'levi@example.com'
  },
  {
    name: 'Lily Griffin',
    rollNumber: 'BCA2025042',
    course: 'BCA (DevSecOps)',
    year: '2nd Year',
    email: 'lily@example.com'
  },
  {
    name: 'Daniel Simmons',
    rollNumber: 'BCA2025043',
    course: 'BCA (Embedded Systems)',
    year: '2nd Year',
    email: 'daniel@example.com'
  },
  {
    name: 'Victoria Jenkins',
    rollNumber: 'BCA2025044',
    course: 'BCA (Cloud Security)',
    year: '1st Year',
    email: 'victoria@example.com'
  },
  {
    name: 'Matthew Foster',
    rollNumber: 'BCA2025045',
    course: 'BCA (Cyber Law)',
    year: '3rd Year',
    email: 'matthew@example.com'
  },
  {
    name: 'Aria Powell',
    rollNumber: 'BCA2025046',
    course: 'BCA (Software Architecture)',
    year: '2nd Year',
    email: 'aria@example.com'
  },
  {
    name: 'Jayden Bryant',
    rollNumber: 'BCA2025047',
    course: 'BCA (AI in Healthcare)',
    year: '2nd Year',
    email: 'jayden@example.com'
  },
  {
    name: 'Penelope Barnes',
    rollNumber: 'BCA2025048',
    course: 'BCA (GIS & Remote Sensing)',
    year: '1st Year',
    email: 'penelope@example.com'
  },
  {
    name: 'Gabriel Henderson',
    rollNumber: 'BCA2025049',
    course: 'BCA (Fintech)',
    year: '3rd Year',
    email: 'gabriel@example.com'
  },
  {
    name: 'Hannah Hunter',
    rollNumber: 'BCA2025050',
    course: 'BCA (AI Ethics)',
    year: '2nd Year',
    email: 'hannah@example.com'
  }
];

export default studentData;