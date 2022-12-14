toc.dat                                                                                             0000600 0004000 0002000 00000004720 14324654074 0014453 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP            )            	    z            data    15.0    15.0     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         ?           1262    16402    data    DATABASE     x   CREATE DATABASE data WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE data;
                postgres    false         ?            1259    16412    data    TABLE     ?   CREATE TABLE public.data (
    id integer NOT NULL,
    date date,
    name character varying(30),
    count integer,
    distance integer
);
    DROP TABLE public.data;
       public         heap    postgres    false         ?            1259    16411    data_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.data_id_seq;
       public          postgres    false    215         ?           0    0    data_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.data_id_seq OWNED BY public.data.id;
          public          postgres    false    214         d           2604    16415    data id    DEFAULT     b   ALTER TABLE ONLY public.data ALTER COLUMN id SET DEFAULT nextval('public.data_id_seq'::regclass);
 6   ALTER TABLE public.data ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215         ?          0    16412    data 
   TABLE DATA                 public          postgres    false    215       3318.dat ?           0    0    data_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.data_id_seq', 6, true);
          public          postgres    false    214         f           2606    16417    data data_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.data
    ADD CONSTRAINT data_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.data DROP CONSTRAINT data_pkey;
       public            postgres    false    215                                                        3318.dat                                                                                            0000600 0004000 0002000 00000001233 14324654074 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        INSERT INTO public.data (id, date, name, count, distance) VALUES (1, '1998-12-31', 'Россия', 10, 20);
INSERT INTO public.data (id, date, name, count, distance) VALUES (2, '1999-12-31', 'Украина', 30, 40);
INSERT INTO public.data (id, date, name, count, distance) VALUES (3, '2000-12-31', 'Беларусь', 50, 60);
INSERT INTO public.data (id, date, name, count, distance) VALUES (4, '2001-12-31', 'Казахстан', 70, 80);
INSERT INTO public.data (id, date, name, count, distance) VALUES (5, '2002-12-31', 'Грузия', 90, 100);
INSERT INTO public.data (id, date, name, count, distance) VALUES (6, '2003-12-31', 'Армения', 110, 120);


                                                                                                                                                                                                                                                                                                                                                                     restore.sql                                                                                         0000600 0004000 0002000 00000004776 14324654074 0015413 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE data;
--
-- Name: data; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE data WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';


ALTER DATABASE data OWNER TO postgres;

\connect data

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data (
    id integer NOT NULL,
    date date,
    name character varying(30),
    count integer,
    distance integer
);


ALTER TABLE public.data OWNER TO postgres;

--
-- Name: data_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.data_id_seq OWNER TO postgres;

--
-- Name: data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_id_seq OWNED BY public.data.id;


--
-- Name: data id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data ALTER COLUMN id SET DEFAULT nextval('public.data_id_seq'::regclass);


--
-- Data for Name: data; Type: TABLE DATA; Schema: public; Owner: postgres
--

\i $$PATH$$/3318.dat

--
-- Name: data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.data_id_seq', 6, true);


--
-- Name: data data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data
    ADD CONSTRAINT data_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  