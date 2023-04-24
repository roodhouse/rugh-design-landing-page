const itemData = [
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/27124221/Bathroom-walls-and-trim-in-Snowbound-SW-7004.jpg',
    title: 'Bathroom walls and trim in Snowbound SW 7004',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/27124233/Snowbound-SW-7004-walls-with-Worldly-Gray-SW-7043-cabinets.jpg',
    title: 'Snowbound SW 7004 walls with Worldly Gray SW 7043 cabinets',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Retreat-SW-6207-in-home-office-wm.jpg',
    title: 'Retreat SW 6207 in home office',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Meditative-SW-6227-in-playroom-wm.jpg',
    title: 'Meditative SW 6227 in playroom',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Agreeable-Gray-SW-7029-with-Cityscape-SW-7067-and-Extra-White-SW-7006-wm.jpg',
    title: 'Agreeable Gray SW 7029 on walls with Cityscape SW 7067 island and Extra White SW 7006 trim',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/03070015/Open-layout-kitchen-with-Amazing-Gray-SW-7044-cabinets-and-White-Duck-SW-7010-walls.jpg',
    title: 'Open layout kitchen with Amazing Gray SW 7044 cabinets and White Duck SW 7010 walls',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Eider-White-SW-7014-in-living-room-wm.jpg',
    title: 'Eider White SW 7014 in living room',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2021/07/16155443/Shoji-White-in-the-Livingroom.jpg',
    title: 'Shoji White SW 7042 in the Living room',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Sherwin-Williams-Sea-Salt-SW-6204-in-bathroom.jpg',
    title: 'Sherwin Williams Sea Salt SW 6204 in bathroom',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Agreeable-Gray-SW-7029-in-family-room-wm.jpg',
    title: 'Agreeable Gray SW 7029 in family room',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Agreeable-Gray-SW-7029-in-kitchen-wm.jpg',
    title: 'Agreeable Gray SW 7029 in kitchen',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Mindful-Gray-in-kitchen.jpg',
    title: 'Mindful Gray SW 7016 kitchen',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/04/aw-02.jpg',
    title: 'Sherwin Williams Nomadic Desert SW 6107 in large Kitchen',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Balanced-Beige-Kitchen-with-Creamy-Trim.jpeg',
    title: 'Balanced Beige SW 7037 kitchen with Creamy SW 7012 trim',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/03070028/Worldly-Gray-SW-7043-used-in-a-bathroom.jpg',
    title: 'Worldly Gray SW 7043 used in a bathroom',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Mindful-Gray-with-Homburg-Gray-Accent.jpg',
    title: 'Bedroom featuring Mindful Gray SW 7016 with Homburg Gray SW 7622',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Mindful-Gray-with-Homburg-Gray-accent-living-room.jpg',
    title: 'Living room featuring Mindful Gray SW 7016 with Homburg Gray SW 7622',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Balanced-Beige-Living-Room.png',
    title: 'Balanced Beige Living Room',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Mindful-Gray-SW-7016-Office-Space.jpg',
    title: 'Mindful Gray SW 7016 Office Space',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Agreeable-Gray-SW-7029-in-dining-room-wm.jpg',
    title: 'Agreeable Gray SW 7029 in dining room',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Sherwin-Williams-Nomadic-Desert-SW-6107-Kitchen-with-stainlesss-steel-applicances.jpg',
    title: 'Sherwin Williams Nomadic Desert SW 6107 Kitchen with stainless steel appliances',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Sherwin-Williams-Balanced-Beige-SW7037-in-dining-room-with-Granite-Peak-SW-6250-accent-1.jpg',
    title: 'Sherwin Williams Balanced Beige SW7037 in dining room with Granite Peak SW 6250',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/27124238/Worldly-Gray-SW-7043-walls-with-Snowbound-SW-7004-trim-and-Riverway-SW-6222-as-an-accent-wall.jpg',
    title: 'Worldly Gray SW 7043 walls with Snowbound SW 7004 trim and Riverway SW 6222 as an accent wall',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/03070007/Dining-room-with-White-Duck-SW-7010-walls-and-Amazing-Gray-SW-7044-trim.jpg',
    title: 'Dining room with White Duck SW 7010 walls and Amazing Gray SW 7044 trim',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Sherwin-Williams-Balanced-Beige-SW-7037-in-open-space.jpg',
    title: 'Sherwin Williams Balanced Beige SW 7037 in open space',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Sherwin-Williams-Nomadic-Desert-SW-6107-Kitchen-desk-nook.jpg',
    title: 'Sherwin Williams Nomadic Desert SW 6107 Kitchen small desk nook',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Agreeable-Gray-SW-7029-in-living-room-wm.jpg',
    title: 'Agreeable Gray SW 7029 in living room',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2021/07/12182310/Shoji-White-SW-7042-walls-with-Riverway-SW-6222-accent-wall.jpg',
    title: 'Shoji White SW 7042 walls with Riverway SW 6222 accent wall',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/03070023/Open-layout-with-White-Duck-SW-7010-walls-and-Amazing-Gray-SW-7044-trim.jpg',
    title: 'Open layout with White Duck SW 7010 walls and Amazing Gray SW 7044 trim',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2021/09/28123119/Pure-White-SW-7005-Cabinets.jpeg',
    title: 'Pure White SW 7005 Cabinets',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Mindful-Gray-SW-7016-Open-Space-1.jpg',
    title: 'Mindful Gray SW 7016 in Open Space',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Dovetail-ceiling-tray-with-City-Loft-walls.png',
    title: 'Dovetail ceiling tray with City Loft walls',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Dovetail-ceiling-tray-with-City-Loft-walls-in-bedroom.png',
    title: 'Dovetail ceiling tray with City Loft walls in bedroom',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2017/09/Balanced-Beige-Kitchen-walls-with-Creamy-Cabinets.png',
    title: 'Balanced Beige Kitchen walls with Creamy Cabinets',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2018/01/Mega-Greige-SW-7031-in-dining-room-wm.jpg',
    title: 'Mega Greige SW 7031 in dining room',
  },
  {
    img: 'https://images.rughdesign.com/wp-content/uploads/2020/02/27124228/Snowbound-SW-7004-in-a-kitchen.jpg',
    title: 'Snowbound SW 7004 in a kitchen',
  },
];

export default itemData