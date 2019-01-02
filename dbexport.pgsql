--
-- PostgreSQL database dump
--

-- Dumped from database version 11.0
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: component; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.component (
    component_id integer NOT NULL,
    content text,
    status character varying(100),
    name character varying(255),
    author integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.component OWNER TO pilu;

--
-- Name: component_component_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.component_component_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.component_component_id_seq OWNER TO pilu;

--
-- Name: component_component_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.component_component_id_seq OWNED BY public.component.component_id;


--
-- Name: component_meta; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.component_meta (
    cmeta_id integer NOT NULL,
    ccomponent_id integer,
    key character varying(255),
    value text
);


ALTER TABLE public.component_meta OWNER TO pilu;

--
-- Name: component_meta_cmeta_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.component_meta_cmeta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.component_meta_cmeta_id_seq OWNER TO pilu;

--
-- Name: component_meta_cmeta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.component_meta_cmeta_id_seq OWNED BY public.component_meta.cmeta_id;


--
-- Name: history; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.history (
    history_id integer NOT NULL,
    reference_id integer,
    content text,
    author integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.history OWNER TO pilu;

--
-- Name: history_history_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.history_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.history_history_id_seq OWNER TO pilu;

--
-- Name: history_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.history_history_id_seq OWNED BY public.history.history_id;


--
-- Name: media; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.media (
    media_id integer NOT NULL,
    title character varying(255),
    status character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    author integer,
    url text
);


ALTER TABLE public.media OWNER TO pilu;

--
-- Name: media_media_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.media_media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.media_media_id_seq OWNER TO pilu;

--
-- Name: media_media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.media_media_id_seq OWNED BY public.media.media_id;


--
-- Name: media_meta; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.media_meta (
    mmeta_id integer NOT NULL,
    m_media_id integer,
    key character varying(255),
    value text
);


ALTER TABLE public.media_meta OWNER TO pilu;

--
-- Name: media_meta_mmeta_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.media_meta_mmeta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.media_meta_mmeta_id_seq OWNER TO pilu;

--
-- Name: media_meta_mmeta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.media_meta_mmeta_id_seq OWNED BY public.media_meta.mmeta_id;


--
-- Name: page; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.page (
    id integer NOT NULL,
    title character varying(255),
    content text,
    status character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    author integer,
    languages character varying(100)
);


ALTER TABLE public.page OWNER TO pilu;

--
-- Name: page_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.page_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.page_id_seq OWNER TO pilu;

--
-- Name: page_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.page_id_seq OWNED BY public.page.id;


--
-- Name: page_meta; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.page_meta (
    pmeta_id integer NOT NULL,
    page_id integer,
    key character varying(255),
    value text
);


ALTER TABLE public.page_meta OWNER TO pilu;

--
-- Name: page_meta_pmeta_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.page_meta_pmeta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.page_meta_pmeta_id_seq OWNER TO pilu;

--
-- Name: page_meta_pmeta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.page_meta_pmeta_id_seq OWNED BY public.page_meta.pmeta_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: pilu
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO pilu;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: pilu
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO pilu;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilu
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: component component_id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.component ALTER COLUMN component_id SET DEFAULT nextval('public.component_component_id_seq'::regclass);


--
-- Name: component_meta cmeta_id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.component_meta ALTER COLUMN cmeta_id SET DEFAULT nextval('public.component_meta_cmeta_id_seq'::regclass);


--
-- Name: history history_id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.history ALTER COLUMN history_id SET DEFAULT nextval('public.history_history_id_seq'::regclass);


--
-- Name: media media_id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.media ALTER COLUMN media_id SET DEFAULT nextval('public.media_media_id_seq'::regclass);


--
-- Name: media_meta mmeta_id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.media_meta ALTER COLUMN mmeta_id SET DEFAULT nextval('public.media_meta_mmeta_id_seq'::regclass);


--
-- Name: page id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.page ALTER COLUMN id SET DEFAULT nextval('public.page_id_seq'::regclass);


--
-- Name: page_meta pmeta_id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.page_meta ALTER COLUMN pmeta_id SET DEFAULT nextval('public.page_meta_pmeta_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: component; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.component (component_id, content, status, name, author, created_at) FROM stdin;
2	Gallery1	active	gallery	1	2018-12-20 12:00:27.424898
1	NAV1	active	navigation	1	2018-12-18 22:16:08.548113
\.


--
-- Data for Name: component_meta; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.component_meta (cmeta_id, ccomponent_id, key, value) FROM stdin;
2	2	something	40, 44, 43, 31
1	2	picture	[27,31,40,43,44,55,56,60,61,28]
3	1	nav_name	["home","second","gallery","hello"]
\.


--
-- Data for Name: history; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.history (history_id, reference_id, content, author, created_at) FROM stdin;
\.


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.media (media_id, title, status, created_at, author, url) FROM stdin;
27	Aquarium-Backgrounds-Pictures-5.jpg	active	2018-12-19 12:28:42.339204	1	https://s3.amazonaws.com/aquariumdesign/ni8EnocFJZMqYkHkGNOXxUrjxHQVuIxT.jpg
28	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-19 12:44:53.898948	1	https://s3.amazonaws.com/aquariumdesign/IFGqwTar0BAJyZJyn10PZnUoeS8BLXUt.jpg
29	wallpaper-M2010s.PNG	active	2018-12-19 12:45:03.445461	1	https://s3.amazonaws.com/aquariumdesign/oYdLBAPAh6hLzc_8Ca9iiU96QC2J6q-f.PNG
30	images.png	active	2018-12-19 16:29:58.274773	1	https://s3.amazonaws.com/aquariumdesign/nqMxZhTsg6hhWh6q2Siua8TFbLidU2SK.png
31	wallpaper-M2010s.PNG	active	2018-12-19 16:44:24.488988	1	https://s3.amazonaws.com/aquariumdesign/1mJUFhul72Nl2kfA1QPpU7XfRZrxQM3r.PNG
32	wallpaper-M2010s.PNG	active	2018-12-19 16:45:46.204041	1	https://s3.amazonaws.com/aquariumdesign/gJ5JojHxIKTO5a2L-GuDRsdJhzntoWN4.PNG
33	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-19 16:50:02.518179	1	https://s3.amazonaws.com/aquariumdesign/iUX-f6UORw5PmQ49hHb9d58Ewx8YSQYi.jpg
34	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-19 16:51:56.024896	1	https://s3.amazonaws.com/aquariumdesign/6zPIMtl6X_MDurX4ocOm8UvNK9SxrYLL.jpg
35	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-19 16:53:10.42448	1	https://s3.amazonaws.com/aquariumdesign/MnfFJVxsVSNXqfxp2zdEM72U127vS7mR.jpg
36	wallpaper-M2010s.PNG	active	2018-12-19 16:54:54.257794	1	https://s3.amazonaws.com/aquariumdesign/2FGvrvcl3QPC9KdwqPS9253UUBnh9fq_.PNG
37	images.png	active	2018-12-19 16:55:50.239569	1	https://s3.amazonaws.com/aquariumdesign/x7KiPt51UDUr9afkEfMZrwaMW7gzqQxT.png
38	wallpaper-M2010s.PNG	active	2018-12-19 16:56:56.12497	1	https://s3.amazonaws.com/aquariumdesign/mX4ymfiMdTf8P3FsM9JDoiiLF995QpYc.PNG
39	wallpaper-M2010s.PNG	active	2018-12-19 16:57:19.978129	1	https://s3.amazonaws.com/aquariumdesign/G2x_mc3jPhSYxMYkP6nv1z96hyM2pTAq.PNG
40	raw-fish-svgrepo-com.svg	active	2018-12-19 17:20:30.370545	1	https://s3.amazonaws.com/aquariumdesign/hMhz2FtO0nsUh7oCfgnftcEBr_6-k0x6.svg
41	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-19 17:35:33.256456	1	https://s3.amazonaws.com/aquariumdesign/G3SKvJ1ILJLXP6N-Q1KvCHP2YvYfHciH.jpg
42	wallpaper-M2010s.PNG	active	2018-12-19 17:37:11.431847	1	https://s3.amazonaws.com/aquariumdesign/H3KgAYD9sLevUfhMrh6m9wDWSYfy12Ok.PNG
43	location_img-5822-1935552818-148.jpg	active	2018-12-19 17:38:36.342624	1	https://s3.amazonaws.com/aquariumdesign/vTahCIc0Yt5yXTeJkaqwMbukmjmZMtwU.jpg
44	Aquarium-Backgrounds-Pictures-5.jpg	active	2018-12-19 17:39:15.461475	1	https://s3.amazonaws.com/aquariumdesign/rybEzlO1fHbFuL-1P36T-hmyzayk-z79.jpg
45	Aquarium-Backgrounds-Pictures-5.jpg	active	2018-12-19 17:40:43.115422	1	https://s3.amazonaws.com/aquariumdesign/_cynWBt3q3fIztYB9Atj8k17pcxWJzhA.jpg
46	wallpaper-M2010s.PNG	active	2018-12-19 17:44:16.726842	1	https://s3.amazonaws.com/aquariumdesign/AAgj6RvN8CWjBZ1Y-o0B0bqQNE1E-OXl.PNG
47	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-19 17:45:04.15437	1	https://s3.amazonaws.com/aquariumdesign/XFbzRfmxFVCGyzpWH6Adryd0QfxwXgOY.jpg
48	location_img-5822-1935552818-148.jpg	active	2018-12-19 17:48:28.652507	1	https://s3.amazonaws.com/aquariumdesign/Qt-il86HvIgZS6GM69TihnIoaLo9RoA4.jpg
49	images.png	active	2018-12-20 13:57:36.005045	1	https://s3.amazonaws.com/aquariumdesign/-E4mAdqFLTIx14e5eaNtPLz1uEZGYcv0.png
50	images_2.png	active	2018-12-20 13:58:59.288283	1	https://s3.amazonaws.com/aquariumdesign/O1ICbCEHTXchkMBW8hb8DwEoPmwP8vqk.png
51	Aquarium-Backgrounds-Pictures-5.jpg	active	2018-12-20 14:12:33.248243	1	https://s3.amazonaws.com/aquariumdesign/FFtBUfEjzuH_QeI8ynnF00nsdclCmz-z.jpg
52	images_2.png	active	2018-12-20 14:15:00.299841	1	https://s3.amazonaws.com/aquariumdesign/H4lUx6u2BdpvEyLv1iGvj_ac5VgwIGQn.png
53	wallpaper-M2010s.PNG	active	2018-12-20 14:18:24.694755	1	https://s3.amazonaws.com/aquariumdesign/rWPujeUpHc1Bc1H7cXRyWZgg_uvD4ukq.PNG
54	wallpaper-M2010s.PNG	active	2018-12-20 14:30:14.121802	1	https://s3.amazonaws.com/aquariumdesign/ohwfQtqHS-j2UDg__XDF_QFWjmbFC9bj.PNG
55	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-20 14:30:57.06666	1	https://s3.amazonaws.com/aquariumdesign/CM1lUEypfrddQJ--vwUJ1WuRY-NBUihi.jpg
56	wallpaper-M2010s.PNG	active	2018-12-20 14:32:54.692543	1	https://s3.amazonaws.com/aquariumdesign/ATNlb0d6FVDYP5MKQ8M4slSSyXDXvRoU.PNG
57	wallpaper-M2010s.PNG	active	2018-12-20 15:15:38.317923	1	https://s3.amazonaws.com/aquariumdesign/Leu7irpeDl1NqSR8vgBfRSrT1WrbJI1Q.PNG
58	fish.svg	active	2018-12-20 15:15:52.654703	1	https://s3.amazonaws.com/aquariumdesign/QeyZZL_Lu9QqZyAjPrvaovs6VVw-8n-d.svg
59	raw-fish-svgrepo-com.svg	active	2018-12-20 15:17:27.304348	1	https://s3.amazonaws.com/aquariumdesign/OBCnB88wqeUElNZ48a-lQHopmU5V_JzB.svg
60	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-20 15:25:28.461698	1	https://s3.amazonaws.com/aquariumdesign/P_e2-Q0l1t6_Gogf6dxWlpopauQQDi_0.jpg
61	images.png	active	2018-12-20 15:37:12.067949	1	https://s3.amazonaws.com/aquariumdesign/2YrZWfEl7k3pvURP6g8APO3vjb0jPu21.png
62	MA_11944_PlantedOasis_SlateWall.jpg	active	2018-12-21 18:49:24.033109	1	https://s3.amazonaws.com/aquariumdesign/_3RFE2_Fzg4gabkWqRw5wZ-ZTSVSI78S.jpg
\.


--
-- Data for Name: media_meta; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.media_meta (mmeta_id, m_media_id, key, value) FROM stdin;
\.


--
-- Data for Name: page; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.page (id, title, content, status, created_at, author, languages) FROM stdin;
2	second	<div class="row">\n<div class="col-sm-6 p-5">first</div>\n<div class="col-sm-6 p-5">second</div>\n</div>\n<div>\n<div class="col-sm-4 p-5"><img class="img-fluid own-shadow" src="https://s3.amazonaws.com/aquariumdesign/oYdLBAPAh6hLzc_8Ca9iiU96QC2J6q-f.PNG" /></div>\n<div class="col-sm-4 p-5">&nbsp;</div>\n<div class="col-sm-4 p-5">&nbsp;</div>\n</div>	active	2018-12-17 23:18:14.903426	1	eng
7	gallery	<h1 class="col-sm-6 p-5">Gallery</h1>\n<div class="col-sm-6 p-5">&nbsp;</div>	active	2018-12-20 15:49:25.275319	1	eng
13	hello	<div class="row fluid">\n<h1 class="col-sm-4 p-5">hello</h1>\n<div class="col-sm-8 p-5">&nbsp;</div>\n</div>	active	2018-12-21 18:49:48.39033	1	eng
1	home	<div class="row">\n<div class="col-sm-8 p-5"><img class="img-fluid own-shadow" src="https://s3.amazonaws.com/aquariumdesign/IFGqwTar0BAJyZJyn10PZnUoeS8BLXUt.jpg" /></div>\n<div class="col-sm-4 p-5">\n<h2 class="text-color">Title</h2>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>Ljkldfjsakljkflsjka, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<a class="link" href="second">More...</a></div>\n</div>\n<div class="row">\n<div class="col-sm-4 p-5">\n<h2 class="text-color">Title</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<a class="link" href="gallery">Gallery</a></div>\n<div class="col-sm-8 p-5"><img class="img-fluid own-shadow" src="https://s3.amazonaws.com/aquariumdesign/IFGqwTar0BAJyZJyn10PZnUoeS8BLXUt.jpg" /></div>\n</div>	active	2018-12-17 15:04:33.842144	1	eng
\.


--
-- Data for Name: page_meta; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.page_meta (pmeta_id, page_id, key, value) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: pilu
--

COPY public.users (id, first_name, last_name, email, password, created_at) FROM stdin;
1	oli	oli	oli	$2a$10$WQD31Ma.N8tr9OM5R3M.FOEYKcfGWgvlKAKDbF/pYk9xtKML17cFi	2018-12-17 13:42:57.589564
\.


--
-- Name: component_component_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.component_component_id_seq', 2, true);


--
-- Name: component_meta_cmeta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.component_meta_cmeta_id_seq', 3, true);


--
-- Name: history_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.history_history_id_seq', 1, false);


--
-- Name: media_media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.media_media_id_seq', 62, true);


--
-- Name: media_meta_mmeta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.media_meta_mmeta_id_seq', 1, false);


--
-- Name: page_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.page_id_seq', 13, true);


--
-- Name: page_meta_pmeta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.page_meta_pmeta_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pilu
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: component_meta component_meta_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.component_meta
    ADD CONSTRAINT component_meta_pkey PRIMARY KEY (cmeta_id);


--
-- Name: component component_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.component
    ADD CONSTRAINT component_pkey PRIMARY KEY (component_id);


--
-- Name: history history_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_pkey PRIMARY KEY (history_id);


--
-- Name: media_meta media_meta_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.media_meta
    ADD CONSTRAINT media_meta_pkey PRIMARY KEY (mmeta_id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (media_id);


--
-- Name: page_meta page_meta_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.page_meta
    ADD CONSTRAINT page_meta_pkey PRIMARY KEY (pmeta_id);


--
-- Name: page page_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.page
    ADD CONSTRAINT page_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: component component_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.component
    ADD CONSTRAINT component_author_fkey FOREIGN KEY (author) REFERENCES public.users(id);


--
-- Name: component_meta component_meta_ccomponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.component_meta
    ADD CONSTRAINT component_meta_ccomponent_id_fkey FOREIGN KEY (ccomponent_id) REFERENCES public.component(component_id);


--
-- Name: history history_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_author_fkey FOREIGN KEY (author) REFERENCES public.users(id);


--
-- Name: media media_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_author_fkey FOREIGN KEY (author) REFERENCES public.users(id);


--
-- Name: media_meta media_meta_m_media_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.media_meta
    ADD CONSTRAINT media_meta_m_media_id_fkey FOREIGN KEY (m_media_id) REFERENCES public.media(media_id);


--
-- Name: page page_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.page
    ADD CONSTRAINT page_author_fkey FOREIGN KEY (author) REFERENCES public.users(id);


--
-- Name: page_meta page_meta_page_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: pilu
--

ALTER TABLE ONLY public.page_meta
    ADD CONSTRAINT page_meta_page_id_fkey FOREIGN KEY (page_id) REFERENCES public.page(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT USAGE ON SCHEMA public TO readaccess;
GRANT USAGE ON SCHEMA public TO readonly;


--
-- Name: TABLE component; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.component TO readaccess;
GRANT SELECT ON TABLE public.component TO readonly;


--
-- Name: TABLE component_meta; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.component_meta TO readaccess;
GRANT SELECT ON TABLE public.component_meta TO readonly;


--
-- Name: TABLE history; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.history TO readaccess;
GRANT SELECT ON TABLE public.history TO readonly;


--
-- Name: TABLE media; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.media TO readaccess;
GRANT SELECT ON TABLE public.media TO readonly;


--
-- Name: TABLE media_meta; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.media_meta TO readaccess;
GRANT SELECT ON TABLE public.media_meta TO readonly;


--
-- Name: TABLE page; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.page TO readaccess;
GRANT SELECT ON TABLE public.page TO readonly;


--
-- Name: TABLE page_meta; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.page_meta TO readaccess;
GRANT SELECT ON TABLE public.page_meta TO readonly;


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: pilu
--

GRANT SELECT ON TABLE public.users TO readaccess;
GRANT SELECT ON TABLE public.users TO readonly;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: pilu
--

ALTER DEFAULT PRIVILEGES FOR ROLE pilu IN SCHEMA public REVOKE ALL ON TABLES  FROM pilu;
ALTER DEFAULT PRIVILEGES FOR ROLE pilu IN SCHEMA public GRANT SELECT ON TABLES  TO readaccess;
ALTER DEFAULT PRIVILEGES FOR ROLE pilu IN SCHEMA public GRANT SELECT ON TABLES  TO readonly;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: just_read
--

ALTER DEFAULT PRIVILEGES FOR ROLE just_read IN SCHEMA public REVOKE ALL ON TABLES  FROM just_read;
ALTER DEFAULT PRIVILEGES FOR ROLE just_read IN SCHEMA public GRANT SELECT ON TABLES  TO readaccess;


--
-- PostgreSQL database dump complete
--

