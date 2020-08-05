import React from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherList';
import Input from '../../components/inputs';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <Input name="subject" label="Matéria"/>

                    <Input name="week_day" label="Dia da Semana"/>

                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;